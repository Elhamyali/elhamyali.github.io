import { migratedContent } from "$data/content.js";
import { site } from "$data/site.js";

export const prerender = true;

export function GET() {
	const pages = [
		"/",
		"/about/",
		"/blog/",
		"/johns-hopkins-study/",
		"/publications/",
		...migratedContent.map((item) => item.href)
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((path) => `  <url><loc>${site.url}${path}</loc></url>`).join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: { "Content-Type": "application/xml" }
	});
}
