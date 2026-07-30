import { caseStudies } from "$data/content.js";

export const stories = [
	{
		title: "When Home Moves",
		description:
			"When home is erased, where do you go? An interactive data essay tracing how climate disasters drive displacement and how Pacific communities are engineering adaptation.",
		href: "https://www.elhamyali.com/when-home-moves-pacific/",
		media: "/images/featured/when_home_moves.mp4",
		mediaType: "video",
		alt: "An interactive map showing the number of people affected by disasters in the Pacific",
		tools: ["Svelte", "D3.js", "R"]
	},
	{
		title: "Love, Earth",
		description:
			"A microfiction and data visualization postcard series pairing interactive charts with hopeful stories grounded in research on real climate solutions.",
		href: "https://www.elhamyali.com/love-earth/",
		media: "/images/featured/love_earth.png",
		alt: "First postcard in the Love, Earth series",
		tools: ["Svelte", "D3.js", "rough.js", "R"]
	},
	{
		title: "2,212 studies used disappearing federal climate justice tools",
		description:
			"An investigation into how researchers use now-defunct federal environmental justice tools to serve communities.",
		href: "https://screening-tools.com/blog/pedp-environmental-justice-data-tools-story",
		media: "/images/featured/pedp.jpg",
		alt: "Public Environmental Data Partners climate justice data story",
		tools: ["R", "Highcharts", "Flourish", "JavaScript"]
	},
	{
		title: "Climate resilience requires equitable access to quality green jobs",
		description:
			"An analysis of racial and income inequities in access to quality green jobs across three sectors in Saint Paul.",
		href: "https://beeckcenter.georgetown.edu/saint-paul-climate-resilience-equity-green-jobs/",
		media: "/images/featured/saint_paul_story_2.gif",
		alt: "Saint Paul green jobs data story",
		tools: ["R", "Highcharts", "Flourish", "JavaScript"]
	},
	{
		title: "The State of State Digital Transformation",
		description:
			"An interactive map and landscape research into how states are modernizing government operations and services.",
		href: "https://digitalgovernmenthub.org/publications/the-state-of-state-digital-transformation/",
		media: "/images/featured/state_of_states.png",
		alt: "Interactive map of state digital transformation",
		tools: ["Mustache", "QGIS", "Flourish"]
	},
	/*
	{
		title: "Responding to the Needs of Student Parents in Maryland",
		description:
			"How to build stronger systems that support student parents’ educational, career, and caregiving goals.",
		href: "https://beeckcenter.georgetown.edu/responding-to-the-needs-of-student-parents-in-maryland/",
		media: "/images/featured/student_parents.avif",
		alt: "A study room for student parent scholars",
		tools: ["Mustache", "Flourish"]
	},
	{
		title: "The Hidden Barrier of Cognitive Accessibility",
		description:
			"How digital government accessibility—or its absence—shows up in everyday life through the lens of the Department of Justice’s Title II ruling.",
		href: "https://digitalgovernmenthub.org/publications/you-didnt-understand-what-they-meant-the-hidden-barrier-of-cognitive-accessibility/",
		media: "/images/featured/1_story_RuaWilliams.jpg",
		alt: "Rua M. Williams speaking during an interview",
		tools: ["Flourish", "JavaScript"]
	},
	*/
	{
		title: "“It Takes a Village”: Counted, Connected, and Cared For",
		description:
			"Inside Arizona’s effort to link health and homelessness data through the Beeck Center’s award-winning Data Labs program.",
		href: "https://beeckcenter.georgetown.edu/report/2025-impact-report/section-3/#it-takes-a-village",
		media: "/images/featured/data-labs.jpeg",
		alt: "Data Labs story about linking health and homelessness data",
		tools: ["Flourish", "JavaScript"]
	},
	{
		title: "Family Health, by Design",
		description:
			"How fragmented public systems shape young families’ well-being in California—and what it would take to design them to work together.",
		href: "https://beeckcenter.georgetown.edu/report/2025-impact-report/section-2/#family-health-by-design",
		media: "/images/featured/fbl.jpg",
		alt: "Family Benefits Lab feature story",
		tools: ["Highcharts", "Flourish"]
	},
	{
		title: "The Heart of TOPCities",
		description:
			"A multimedia story blending qualitative research, survey analysis, and community audio to show how residents co-designed local digital tools.",
		href: "https://beeckcenter.georgetown.edu/the-heart-of-topcities/",
		media: "/images/featured/heart_topcities_2.png",
		alt: "The Heart of TOPCities multimedia story",
		tools: ["R", "Highcharts", "Flourish"]
	}
];

const researchProjectOrder = [
	"pima-county-health-department",
	"washington-state-board-health",
	"us-digital-response",
	"johns-hopkins-center-for-livable-future",
	"arizona-department-of-health-services",
	"new-york-state-department-health-aids-institute",
	"city-of-los-angeles",
	"rho-impact",
	"bureau-veritas",
	"food-planet",
	"columbia-university",
	"healthcare-ready"
];

export const researchProjects = researchProjectOrder.map((slug) => {
	const project = caseStudies.find((item) => item.slug === slug);
	return {
		...project,
		title: project.cardTitle || project.title
	};
});
