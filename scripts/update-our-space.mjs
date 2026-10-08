// One-time update to the live "Our space" page in Sanity:
//   - removes the Chapel
//   - merges the Parent meeting room and Conference room into one room
//   - adds all 19 Eagle Lair panel photos to the Eagle Lair room
// Everything else on the page, including photos set in Studio, is left alone.
// Running it twice is safe.
//
// Usage (from the project folder):
//   SANITY_API_WRITE_TOKEN=... NEXT_PUBLIC_SANITY_PROJECT_ID=... npm run update-our-space

import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN first. See MAINTAINER.md.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2025-10-01", useCdn: false });
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const seed = JSON.parse(await readFile(path.join(root, "content/seed.json"), "utf8"));
const key = () => randomUUID().slice(0, 12);

const page = await client.getDocument("ourSpacePage");
if (!page) {
  console.error("No Our space page in Sanity yet. Run npm run import-content instead.");
  process.exit(1);
}

const merged = "Parent and conference room";
const rooms = [];
for (const room of page.rooms ?? []) {
  if (room.name === "Chapel") continue;
  if (room.name === "Parent meeting room") continue;
  if (room.name === "Conference room") {
    rooms.push({ ...room, name: merged });
    continue;
  }
  rooms.push(room);
}
// If the parent meeting room had text or a photo and the conference room didn't, keep it.
const parent = page.rooms?.find((r) => r.name === "Parent meeting room");
const target = rooms.find((r) => r.name === merged);
if (!target && parent) rooms.push({ ...parent, name: merged });
if (target && parent) {
  target.text ??= parent.text;
  target.image ??= parent.image;
}

const lair = rooms.find((r) => /eagle lair/i.test(r.name));
const seedLair = seed.ourSpacePage.rooms.find((r) => /eagle lair/i.test(r.name));
if (lair && !lair.gallery?.length) {
  lair.gallery = [];
  for (const photo of seedLair.gallery) {
    const file = path.join(root, "public", photo.src);
    const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(photo.src) });
    console.log(`  uploaded ${photo.src}`);
    lair.gallery.push({ _key: key(), _type: "photo", asset: { _type: "reference", _ref: asset._id }, alt: photo.alt });
  }
} else if (lair) {
  console.log("  the Eagle Lair already has more photos, leaving them as they are");
}

await client.patch("ourSpacePage").set({ rooms }).commit();
if (await client.getDocument("drafts.ourSpacePage")) {
  console.log("Note: Our space has unpublished changes in Studio. Publishing them would bring the old rooms back, so discard them in Studio first.");
}
console.log(`Done. Rooms: ${rooms.map((r) => r.name).join(", ")}`);
