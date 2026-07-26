import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const buildRoot = path.resolve("build");
const htmlFiles = walk(buildRoot).filter((file) => file.endsWith(".html"));
const failures = [];
let checkedLinks = 0;

for (const file of htmlFiles) {
	const html = readFileSync(file, "utf8");
	const route = routeFor(file);
	if (route === "/404.html") continue;

	requireMatch(html, /<html[^>]+lang="en"/i, route, "an English document language");
	requireMatch(html, /<title>[^<]+<\/title>/i, route, "a non-empty title");
	requireMatch(
		html,
		/<meta\s+name="description"\s+content="[^"]+"/i,
		route,
		"a non-empty meta description"
	);
	requireMatch(
		html,
		/<link\s+rel="canonical"\s+href="https:\/\/www\.elhamyali\.com\/[^"]*"/i,
		route,
		"a canonical URL on www.elhamyali.com"
	);
	requireMatch(
		html,
		/<meta\s+property="og:title"\s+content="[^"]+"/i,
		route,
		"Open Graph metadata"
	);

	const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
	if (h1Count !== 1) failures.push(`${route}: expected one h1, found ${h1Count}`);

	const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
	for (const [, attribute, target] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
		if (
			!target ||
			target.startsWith("http") ||
			target.startsWith("mailto:") ||
			target.startsWith("tel:") ||
			target.startsWith("data:")
		) {
			continue;
		}

		if (target.startsWith("#")) {
			if (target.length > 1 && !ids.has(target.slice(1))) {
				failures.push(`${route}: unresolved fragment ${target}`);
			}
			continue;
		}

		if (!target.startsWith("/")) continue;
		checkedLinks += 1;
		const [pathname] = target.split(/[?#]/);
		const resolved = resolveBuildPath(pathname, attribute);
		if (!resolved) failures.push(`${route}: unresolved ${attribute} ${target}`);
	}
}

for (const required of [
	".nojekyll",
	"CNAME",
	"robots.txt",
	"sitemap.xml",
	"search.json"
]) {
	if (!existsSync(path.join(buildRoot, required)))
		failures.push(`missing build/${required}`);
}

if (existsSync(path.join(buildRoot, "CNAME"))) {
	const cname = readFileSync(path.join(buildRoot, "CNAME"), "utf8").trim();
	if (cname !== "www.elhamyali.com") failures.push(`CNAME is ${JSON.stringify(cname)}`);
}

if (existsSync(path.join(buildRoot, "robots.txt"))) {
	const robots = readFileSync(path.join(buildRoot, "robots.txt"), "utf8");
	if (!robots.includes("https://www.elhamyali.com/sitemap.xml")) {
		failures.push("robots.txt does not advertise the canonical sitemap");
	}
}

if (failures.length) {
	console.error(`Static-site audit failed with ${failures.length} issue(s):`);
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(
	`Static-site audit passed: ${htmlFiles.length} HTML pages, ${checkedLinks} local references, canonical metadata, CNAME, robots, sitemap, and search index.`
);

function walk(directory) {
	return readdirSync(directory).flatMap((entry) => {
		const absolute = path.join(directory, entry);
		return statSync(absolute).isDirectory() ? walk(absolute) : [absolute];
	});
}

function routeFor(file) {
	const relative = path.relative(buildRoot, file);
	if (relative === "index.html") return "/";
	return `/${relative.replace(/index\.html$/, "").replaceAll(path.sep, "/")}`;
}

function requireMatch(html, pattern, route, label) {
	if (!pattern.test(html)) failures.push(`${route}: missing ${label}`);
}

function resolveBuildPath(pathname, attribute) {
	const relative = pathname.replace(/^\/+/, "");
	const candidates =
		attribute === "href" && (pathname.endsWith("/") || !path.extname(pathname))
			? [path.join(buildRoot, relative, "index.html"), path.join(buildRoot, relative)]
			: [path.join(buildRoot, relative)];
	return candidates.find((candidate) => existsSync(candidate));
}
