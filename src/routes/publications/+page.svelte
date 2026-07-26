<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";
	import Content from "$content/pages/publications.svx";

	const metadata = {
		title: "Publications",
		description:
			"Research, data stories, guides, presentations, and writing by Elham Y. Ali.",
		href: "/publications/",
		image: "/images/featured/clf.jpg",
		imageAlt: "A selection of publications and research by Elham Y. Ali"
	};
</script>

<ArticleLayout {metadata}>
	<Content />
</ArticleLayout>
