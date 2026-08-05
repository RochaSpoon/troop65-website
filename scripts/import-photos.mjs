/**
 * Import a folder of phone photos into /public/images for the site.
 *
 * Handles the two things phone exports reliably break on:
 *  - .HEIC files (converted to JPEG)
 *  - Google Pixel "Motion Photo" exports that are actually HEIC data with
 *    a .jpg extension (detected by magic bytes, not trusted by extension)
 *
 * Then resizes to a max dimension, compresses, strips EXIF via re-encode,
 * and renames sequentially with a given prefix.
 *
 * Usage:
 *   node scripts/import-photos.mjs <sourceDir> <outDir> <prefix>
 *
 * Example:
 *   node scripts/import-photos.mjs "C:/Users/you/Downloads/fall campout" \
 *     "public/images/activities/fall-campout-2026" fall-campout
 *
 * Requires the (dev-only, --no-save) packages heic-convert and sharp:
 *   npm install --no-save heic-convert sharp
 */
import convert from "heic-convert";
import sharp from "sharp";
import { readdir, readFile, writeFile, mkdir, rename as fsRename } from "node:fs/promises";
import path from "node:path";

const [, , srcDir, outDir, prefix] = process.argv;

if (!srcDir || !outDir || !prefix) {
  console.error("Usage: node scripts/import-photos.mjs <sourceDir> <outDir> <prefix>");
  process.exit(1);
}

const MAX_DIM = 2400;
const JPEG_QUALITY = 78;

await mkdir(outDir, { recursive: true });

function isHeicMagic(buffer) {
  // ISO-BMFF 'ftyp' box with a heic/heif/mif1 brand, regardless of file extension
  const s = buffer.subarray(4, 12).toString("ascii");
  return s.startsWith("ftyp") && /heic|heix|hevc|mif1/i.test(s);
}

const files = (await readdir(srcDir)).filter((f) => !f.startsWith("."));
const results = [];

for (const file of files) {
  const inputPath = path.join(srcDir, file);
  const raw = await readFile(inputPath);

  try {
    let jpegBuffer;

    if (isHeicMagic(raw) || path.extname(file).toLowerCase() === ".heic") {
      const converted = await convert({ buffer: raw, format: "JPEG", quality: 0.9 });
      jpegBuffer = Buffer.from(converted);
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      jpegBuffer = raw;
    } else {
      console.log(`Skipping ${file} (unsupported type)`);
      continue;
    }

    const resized = await sharp(jpegBuffer, { failOn: "none" })
      .rotate()
      .resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();

    results.push(resized);
    console.log(`OK: ${file} -> ${(resized.length / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.log(`FAILED: ${file} — ${err.message}`);
  }
}

let i = 1;
for (const buffer of results) {
  const name = `${prefix}-${String(i).padStart(2, "0")}.jpg`;
  const tmpPath = path.join(outDir, `${name}.tmp`);
  const finalPath = path.join(outDir, name);
  await writeFile(tmpPath, buffer);
  await fsRename(tmpPath, finalPath);
  i++;
}

console.log(`\nImported ${results.length} photo(s) into ${outDir}`);
