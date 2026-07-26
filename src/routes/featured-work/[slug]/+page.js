import { error } from "@sveltejs/kit";
import {
	caseStudies,
	getContentNeighbors,
	migratedCaseStudies
} from "$data/content.js";

export function entries() {
	return migratedCaseStudies.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
	const metadata = migratedCaseStudies.find((item) => item.slug === params.slug);
	if (!metadata) error(404, "Case study not found");

	return {
		metadata,
		...getContentNeighbors(caseStudies, params.slug)
	};
}
