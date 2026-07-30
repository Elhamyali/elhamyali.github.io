import { migratedContent } from "$data/content.js";

export const prerender = true;

export function GET() {
	const pages = [
		{
			title: "About",
			description:
				"Researcher and data storyteller working across climate change, public health, health equity, and civic technology.",
			href: "/about/",
			type: "page",
			categories: []
		},
		{
			title: "Publications",
			description: "Research, data stories, guides, presentations, and writing.",
			href: "/publications/",
			type: "page",
			categories: []
		},
		{
			title: "Contact",
			description:
				"Get in touch with Elham Y. Ali about new opportunities, research, and data storytelling.",
			href: "/contact/",
			type: "page",
			categories: []
		},
		{
			title: "Johns Hopkins Study on Parks and Green Spaces",
			description:
				"A national study about equitable, resilient, and responsive parks and green spaces.",
			href: "/johns-hopkins-study/",
			type: "page",
			categories: ["Research"]
		}
	];
	const index = [...migratedContent, ...pages].map((item) => ({
		title: item.organization ? `${item.organization} — ${item.title}` : item.title,
		description: item.description,
		url: item.href,
		type: item.type,
		categories: item.categories || []
	}));

	return Response.json(index);
}
