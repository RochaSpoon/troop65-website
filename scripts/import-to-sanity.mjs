// Copies the starting content in content/seed.json, and its photos, into Sanity.
//
// Usage (from the project folder):
//   SANITY_API_WRITE_TOKEN=... NEXT_PUBLIC_SANITY_PROJECT_ID=... npm run import-content
//
// By default it only creates pages that don't exist yet, so it never overwrites
// edits made in Studio. Add -- --replace to overwrite everything with the seed.

import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const replace = process.argv.includes("--replace");

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN first. See MAINTAINER.md.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2025-10-01", useCdn: false });
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const seed = JSON.parse(await readFile(path.join(root, "content/seed.json"), "utf8"));

const uploaded = new Map();
async function upload(src) {
  if (uploaded.has(src)) return uploaded.get(src);
  const file = path.join(root, "public", src);
  if (!existsSync(file)) throw new Error(`Missing photo ${file}`);
  const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(src) });
  console.log(`  uploaded ${src}`);
  uploaded.set(src, asset._id);
  return asset._id;
}

// Seed photos look like { src, alt, hotspot? }. Sanity stores them as image fields.
async function convert(value) {
  if (Array.isArray(value)) {
    return Promise.all(
      value.map(async (item) => {
        const out = await convert(item);
        return out && typeof out === "object" ? { _key: randomUUID().slice(0, 12), ...out } : out;
      }),
    );
  }
  if (value && typeof value === "object") {
    if (typeof value.src === "string") {
      const photo = { _type: "photo", asset: { _type: "reference", _ref: await upload(value.src) }, alt: value.alt };
      if (value.hotspot) photo.hotspot = { _type: "sanity.imageHotspot", width: 0.6, height: 0.6, ...value.hotspot };
      return photo;
    }
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = await convert(v);
    return out;
  }
  return value;
}

const docs = [
  seed.settings,
  seed.homePage,
  seed.aboutPage,
  seed.whatWeDoPage,
  seed.ourSpacePage,
  seed.leadershipPage,
  seed.joinPage,
  seed.troopPage,
  ...seed.announcements,
];

for (const doc of docs) {
  const exists = await client.getDocument(doc._id);
  if (exists && !replace) {
    console.log(`skip ${doc._id} (already in Sanity)`);
    continue;
  }
  console.log(`${exists ? "replace" : "create"} ${doc._id}`);
  await client.createOrReplace(await convert(doc));
}
console.log("Done.");
