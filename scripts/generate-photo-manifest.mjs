import { open, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const photoDirectory = path.resolve("public/photos");
const outputFile = path.resolve("src/data/momentPhotoPaths.generated.ts");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const featuredFileNames = new Set([
  "first-date.jpg",
  "second-date.jpg",
  "third-date.jpg",
  "fourth-date.jpg",
]);
const replacementPhotoFileNames = new Set(["photo 1.jpg", "photo 2.jpg"]);
const expectedFormats = new Map([
  [".jpg", "JPEG"],
  [".jpeg", "JPEG"],
  [".png", "PNG"],
  [".webp", "WebP"],
]);
const heifBrands = new Set(["heic", "heix", "hevc", "hevx", "mif1", "msf1"]);

function detectImageFormat(header) {
  if (header.length >= 3 && header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff) {
    return "JPEG";
  }
  if (header.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return "PNG";
  }
  if (
    header.length >= 12 &&
    header.toString("ascii", 0, 4) === "RIFF" &&
    header.toString("ascii", 8, 12) === "WEBP"
  ) {
    return "WebP";
  }
  if (
    header.length >= 12 &&
    header.toString("ascii", 4, 8) === "ftyp" &&
    heifBrands.has(header.toString("ascii", 8, 12))
  ) {
    return "HEIC/HEIF";
  }
  return "unknown";
}

async function getImageFormat(relativePath) {
  const fileHandle = await open(path.join(photoDirectory, relativePath), "r");
  try {
    const header = Buffer.alloc(12);
    const { bytesRead } = await fileHandle.read(header, 0, header.length, 0);
    return detectImageFormat(header.subarray(0, bytesRead));
  } finally {
    await fileHandle.close();
  }
}

async function collectFiles(directory, relativeDirectory = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(absolutePath, relativePath)));
    } else if (entry.isFile()) {
      files.push(relativePath.split(path.sep).join("/"));
    }
  }

  return files;
}

const allFiles = await collectFiles(photoDirectory);
const imagePaths = allFiles
  .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))
  .sort((left, right) => left.localeCompare(right));

const mismatchedFiles = [];
for (const imagePath of imagePaths) {
  const expectedFormat = expectedFormats.get(path.extname(imagePath).toLowerCase());
  const actualFormat = await getImageFormat(imagePath);
  if (actualFormat !== expectedFormat) {
    mismatchedFiles.push(`  ${imagePath}: expected ${expectedFormat}, detected ${actualFormat}`);
  }
}

if (mismatchedFiles.length > 0) {
  throw new Error(
    `Photo formats do not match their file extensions. Convert these photos or correct their extensions:\n${mismatchedFiles.join("\n")}`,
  );
}

for (const fileName of featuredFileNames) {
  if (!imagePaths.some((imagePath) => path.posix.basename(imagePath).toLowerCase() === fileName)) {
    throw new Error(`Required featured photo "${fileName}" was not found in public/photos.`);
  }
}

for (const fileName of replacementPhotoFileNames) {
  if (!imagePaths.some((imagePath) => path.posix.basename(imagePath).toLowerCase() === fileName)) {
    throw new Error(`Required replacement photo "${fileName}" was not found in public/photos.`);
  }
}

const unsupportedFiles = allFiles.filter((file) => /\.(heic|heif|mp4|mov)$/i.test(file));
if (unsupportedFiles.length > 0) {
  console.warn(`Skipping files not supported by the photo gallery: ${unsupportedFiles.join(", ")}`);
}

const momentPhotoPaths = imagePaths
  .filter((imagePath) => !featuredFileNames.has(path.posix.basename(imagePath).toLowerCase()))
  .map((imagePath) => `/photos/${imagePath.split("/").map(encodeURIComponent).join("/")}`);

await writeFile(
  outputFile,
  `export const momentPhotoPaths = ${JSON.stringify(momentPhotoPaths, null, 2)} as const;\n`,
  "utf8",
);

console.log(`Generated photo manifest with ${momentPhotoPaths.length} shared moments.`);
