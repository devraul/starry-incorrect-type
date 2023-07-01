# Starry 2.1.0 typing problem

This repository reproduces the problem with some langs not having `.d.ts` files.

## Problem

For some reason, a few langs were generated without its `.d.ts` file.

To prove this problem was introduced on `v2.1.0`, I've installed both versions and did the same imports.

When I try to import `lang/source.gfm.js` from `v2.0`, it works fine. If I try to import `lang/source.gfm.js` from `v2.1`, TS complains that its typing is not there, and actually isn't (you can open the `node_modules/@wooorm/starry-night/lang` folder and see).

## Setup

1. clone this repo
1. run `npm install`
1. open `index.ts` file and see the warning;
   1. if you're using a editor without good ts support, run `npm run lint`

## Script

I've created a script to list all languages without a `.d.ts`. You can run `npm run typingCheck` to see (and check the `script.ts` content to details).

Or, here's the list:

- annotation.liquidhaskell.haskell.js
- hidden.manref.js
- source.brightscript.js
- source.context.js
- source.gdshader.js
- source.gfm.js
- source.js
- source.js.js
- source.js.regexp.js
- source.jsdoc.js
- source.lean.markdown.js
- source.mata.js
- source.perl.6.js
- source.regexp.raku.js
- source.regexp.spin.js
- source.sassdoc.js
- source.vtt.js
- source.x86asm.js
- text.html.js
- text.html.js.js
- text.html.markdown.d2.js

Weirdly, on `v2.0.0` some `.d.ts` were also missing, but I maybe never notice because I wasn't using those ones.
