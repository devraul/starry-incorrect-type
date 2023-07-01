import { createStarryNight } from "@wooorm/starry-night";
import { toHtml } from "hast-util-to-html";

import etc20 from "@wooorm/starry-night-2.0/lang/etc.js";
import etc from "@wooorm/starry-night/lang/etc.js";

import hiddenMan20 from "@wooorm/starry-night-2.0/lang/hidden.manref.js";
import hiddenMan from "@wooorm/starry-night/lang/hidden.manref.js";

import sourceDiff20 from "@wooorm/starry-night-2.0/lang/source.diff.js";
import sourceDiff from "@wooorm/starry-night/lang/source.diff.js";

import sourceGfm20 from "@wooorm/starry-night-2.0/lang/source.gfm.js";
import sourceGfm from "@wooorm/starry-night/lang/source.gfm.js"; // error

const starryNight = await createStarryNight([etc, sourceDiff, sourceGfm]);

const code = `
  # Hello, world!
`;

const scope = starryNight.flagToScope("md") ?? "etc";

const result = starryNight.highlight(code, scope);

console.log(toHtml(result));
