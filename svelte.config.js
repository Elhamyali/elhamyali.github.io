import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import externalLinks from "./tasks/rehype-external-links.js";

const config = {
	extensions: [".svelte", ".svx"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".svx"],
			rehypePlugins: [externalLinks]
		})
	],
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "404.html",
			strict: true
		}),
		paths: {
			base: process.env.BASE_PATH || ""
		}
	}
};

export default config;
