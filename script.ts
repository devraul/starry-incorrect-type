import fs from "node:fs/promises";
import path from "node:path";

/**
 * To get the absolute path
 */
const starryPath = path.resolve("./node_modules/@wooorm/starry-night/lang");
const starry20Path = path.resolve(
  "./node_modules/@wooorm/starry-night-2.0/lang"
);

async function getFilesWithoutTyping(modulePath: string) {
  const files = await fs.readdir(modulePath);

  /**
   * To store the amount of files with the same name.
   * If a dist file has its own typing, it will be 2.
   */
  const filesMap: { [key: string]: number } = {};

  for (const file of files) {
    /**
     * Removing their extension
     */
    const fileName = file.replace(/\.d\.ts$/, "").replace(/\.js$/, "");

    filesMap[fileName] = (filesMap[fileName] ?? 0) + 1;
  }

  const filesWithoutTyping = Object.keys(filesMap)
    .filter((file) => filesMap[file] === 1) // only files without typing
    .map((file) => `${file}.js`) // adding back the extension
    .map((file) => path.join(modulePath, file)); // adding back the path

  return filesWithoutTyping;
}

console.log("v2.0.0", await getFilesWithoutTyping(starry20Path));
console.log("v2.1.0", await getFilesWithoutTyping(starryPath));
