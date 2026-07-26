import { error } from "@sveltejs/kit";
import { blogPosts, getContentNeighbors, migratedBlogPosts } from "$data/content.js";

export function entries() {
	return migratedBlogPosts.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
	const metadata = migratedBlogPosts.find((item) => item.slug === params.slug);
	if (!metadata) error(404, "Blog post not found");

	return {
		metadata,
		...getContentNeighbors(blogPosts, params.slug)
	};
}
