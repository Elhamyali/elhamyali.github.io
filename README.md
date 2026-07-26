# Elham Y. Ali

This is the code for my website, [www.elhamyali.com](https://www.elhamyali.com/). It is built
with SvelteKit 2, Svelte 5, MDsveX, D3.js, and the SvelteKit static adapter, and it is deployed
to GitHub Pages.

I initially built the website with Quarto and later migrated it to SvelteKit. Case studies and
blog posts remain author-friendly Markdown through MDsveX, while structured data powers the
homepage, project listings, navigation, search index, and sitemap.

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run check
npm run build
npm run audit
```

The static production site is generated in `build/`.
