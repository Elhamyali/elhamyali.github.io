const liveSite = "https://www.elhamyali.com";

export const caseStudies = [
	{
		slug: "bridge-to-home",
		organization: "Bridge to Home",
		title: "Fundraising communications supporting people experiencing homelessness",
		image: "dbn1.jpg"
	},
	{
		slug: "pima-county-health-department",
		organization: "Pima County Health Department",
		title: "COVID-19 vaccine delivery for Latina/o/e pregnant people",
		image: "pchd.png"
	},
	{
		slug: "washington-state-board-health",
		organization: "Washington State Board of Health",
		title: "Decisions to require COVID-19 vaccination for school entry",
		image: "wsboh.png"
	},
	{
		slug: "us-digital-response",
		organization: "U.S. Digital Response",
		title: "COVID-19 crisis delivery for 19+ local and state governments",
		image: "usdr.png"
	},
	{
		slug: "johns-hopkins-center-for-livable-future",
		organization: "Johns Hopkins Center for a Livable Future",
		title: "Climate food labels to influence student eating behavior",
		image: "clf.jpg"
	},
	{
		slug: "arizona-department-of-health-services",
		organization: "Arizona Department of Health Services",
		title: "Testing bilingual patient vaccine portal for faster bookings",
		image: "azdhs.png"
	},
	{
		slug: "new-york-state-department-health-aids-institute",
		organization: "New York State Department of Health AIDS Institute",
		title: "Digital tools for improved HIV prevention among young adults",
		image: "2-nysdoh.jpg"
	},
	{
		slug: "city-of-los-angeles",
		organization: "City of Los Angeles",
		title: "Racial equity hubsite with historical and actionable datasets",
		image: "la.png"
	},
	{
		slug: "rho-impact",
		organization: "Rho Impact",
		title:
			"Forecasting greenhouse gas emissions reductions of a smart AI-driven agricultural technology",
		cardTitle: "Projected greenhouse emissions cuts by new farming technology",
		description:
			"Forecasting greenhouse gas emissions reductions of a smart AI-driven agricultural technology.",
		date: "2023-09-15",
		image: "rho.png",
		categories: [
			"Qualitative research",
			"Quantitative research",
			"Data analysis",
			"Predictive analytics",
			"Carbon sequestration",
			"Data visualization"
		],
		migrated: true
	},
	{
		slug: "bureau-veritas",
		organization: "Bureau Veritas",
		title: "Rebrand of an $11M merger and acquisition of six companies",
		image: "bva.png"
	},
	{
		slug: "food-planet",
		organization: "Food+Planet",
		title: "Analysis of dietitian attitudes and actions towards sustainable diets",
		image: "foodplanet.png"
	},
	{
		slug: "columbia-university",
		organization: "Columbia University",
		title: "Impact of lactation pods among pregnant and lactating staff",
		image: "columbia.png"
	},
	{
		slug: "healthcare-ready",
		organization: "Healthcare Ready",
		title: "Multilingual patient and clinician education on COVID-19 treatment",
		image: "healthcare.png"
	}
].map((item) => ({
	type: "case-study",
	...item,
	description: item.description || item.title,
	migrated: true,
	imageFile: item.image,
	image: `/images/featured/${item.image}`,
	href: `/featured-work/${item.slug}/`,
	media: `/images/featured/${item.image}`,
	alt: `${item.organization} project preview`
}));

export const blogPosts = [
	{
		type: "blog",
		slug: "how-to-talk-about-race-with-white-peers",
		sourceSlug: "2022-06-09-how-to-talk-about-race-with-white-peers",
		title: "How to talk about race with white peers",
		description:
			"Racial reconciliation leader John Bobb-Semple shares insights on navigating difficult conversations about race and equity with empathy and vulnerability.",
		date: "2022-06-03",
		image: "/content/how-to-talk-about-race-with-white-peers/images/unmuted_ep1.png",
		imageAlt: "Unmuted podcast episode about discussing race with white peers",
		categories: ["Unmuted Podcast", "Race", "Racism", "Compassionate Dialogue"],
		href: `${liveSite}/blog/2022-06-09-how-to-talk-about-race-with-white-peers/`
	},
	{
		type: "blog",
		slug: "what-the-environment-can-teach-us-about-self-actualization",
		sourceSlug: "2022-07-22-what-the-environment-can-teach-us-about-self-actualization",
		title: "What the environment can teach us about self-actualization",
		description:
			"How natural and built environments can shape personal and organizational self-actualization.",
		date: "2022-07-22",
		image:
			"/content/what-the-environment-can-teach-us-about-self-actualization/images/unmuted_ep2.png",
		image:
			"/content/what-the-environment-can-teach-us-about-self-actualization/images/unmuted_ep2.png",
		imageAlt: "Unmuted podcast episode about environment and self-actualization",
		categories: ["Unmuted Podcast", "Built environment", "Ecosystem thinking"],
		href: `${liveSite}/blog/2022-07-22-what-the-environment-can-teach-us-about-self-actualization/`
	},
	{
		type: "blog",
		slug: "taking-risks-without-being-at-risk",
		sourceSlug: "2022-08-05-taking-risks-without-being-at-risk",
		title: "Taking risks without being at risk",
		description:
			"How to create a culture of trust and power-sharing so everyone can take risks safely.",
		date: "2022-08-05",
		image: "/content/taking-risks-without-being-at-risk/images/unmuted_ep3.png",
		imageAlt: "Unmuted podcast episode about organizational safety and trust",
		categories: ["Unmuted Podcast", "Organizational safety", "Leadership"],
		href: `${liveSite}/blog/2022-08-05-taking-risks-without-being-at-risk/`
	},
	{
		type: "blog",
		slug: "how-racism-shapes-farming-and-land-access-in-the-us",
		sourceSlug: "2022-09-01-how-racism-shapes-farming-and-land-access-in-the-us",
		title: "How racism shapes farming and land access in the U.S.",
		description:
			"The impact of racism on farming and land ownership, food sovereignty, and a just circular food economy.",
		date: "2022-09-01",
		image:
			"/content/how-racism-shapes-farming-and-land-access-in-the-us/images/unmuted_ep4.png",
		image:
			"/content/how-racism-shapes-farming-and-land-access-in-the-us/images/unmuted_ep4.png",
		imageAlt: "Unmuted podcast episode about farming and racial equity",
		categories: ["Unmuted Podcast", "Farming equity", "Food justice"],
		href: `${liveSite}/blog/2022-09-01-how-racism-shapes-farming-and-land-access-in-the-us/`
	},
	{
		type: "blog",
		slug: "learning-fast-and-slow",
		sourceSlug: "2023-02-13-learning-fast-and-slow",
		title: "Learning fast and slow",
		description:
			"Is it better to learn intensively or slowly over time? Research suggests a mix might be best.",
		date: "2023-02-13",
		image: "/content/learning-fast-and-slow/images/learning_fast_slow.png",
		image: "/content/learning-fast-and-slow/images/learning_fast_slow.png",
		imageAlt: "Illustration for Learning fast and slow",
		categories: ["Learning Design"],
		href: `${liveSite}/blog/2023-02-13-learning-fast-and-slow/`
	},
	{
		type: "blog",
		slug: "six-ways-organizations-can-build-antifragile-teams",
		sourceSlug: "2023-03-28-six-ways-organizations-can-build-antifragile-teams",
		title: "Six ways organizations can build antifragile teams",
		description:
			"Six strategies that help teams go beyond resilience and grow stronger through adversity.",
		date: "2023-03-28",
		image:
			"/content/six-ways-organizations-can-build-antifragile-teams/images/antifragile_teams.png",
		image:
			"/content/six-ways-organizations-can-build-antifragile-teams/images/antifragile_teams.png",
		imageAlt: "Illustration for Six ways organizations can build antifragile teams",
		categories: ["Learning Design", "Human-centered Design"],
		href: `${liveSite}/blog/2023-03-28-six-ways-organizations-can-build-antifragile-teams/`
	},
	{
		type: "blog",
		slug: "the-map-we-wore",
		sourceSlug: "2025-06-13-the-map-we-wore",
		title: "The Map We Wore",
		description:
			"An honorable-mention historical microfiction about Palestinian tatreez, memory, and resistance.",
		date: "2025-06-13",
		image: "/content/the-map-we-wore/images/tatreez.jpg",
		imageAlt: "Traditional Palestinian tatreez embroidery",
		categories: ["Storytelling", "Microfiction"],
		migrated: true,
		href: "/blog/the-map-we-wore/"
	}
].map((item) => ({
	...item,
	migrated: true,
	href: `/blog/${item.slug}/`
}));

export const migratedCaseStudies = caseStudies.filter((item) => item.migrated);
export const migratedBlogPosts = blogPosts.filter((item) => item.migrated);
export const migratedContent = [...migratedCaseStudies, ...migratedBlogPosts];

export function getContentNeighbors(collection, slug) {
	const index = collection.findIndex((item) => item.slug === slug);

	return {
		previous: index > 0 ? collection[index - 1] : null,
		next: index >= 0 && index < collection.length - 1 ? collection[index + 1] : null
	};
}
