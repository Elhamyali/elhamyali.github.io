import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import dsv from "@rollup/plugin-dsv";
import path from "node:path";
import svg from "vite-plugin-svgstring";

export default defineConfig({
	plugins: [sveltekit(), dsv(), svg()],
	resolve: {
		alias: {
			$actions: path.resolve("./src/actions"),
			$components: path.resolve("./src/components"),
			$content: path.resolve("./src/content"),
			$data: path.resolve("./src/data"),
			$routes: path.resolve("./src/routes"),
			$runes: path.resolve("./src/runes"),
			$styles: path.resolve("./src/styles"),
			$svg: path.resolve("./src/svg"),
			$utils: path.resolve("./src/utils")
		}
	}
});
