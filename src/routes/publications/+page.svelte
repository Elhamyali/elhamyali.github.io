<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";
	import Content from "$content/pages/publications.svx";

	const metadata = {
		title: "Publications",
		description:
			"Journal articles, stories, toolkits, conference presentations, and other writings.",
		href: "/publications/",
		image: "/images/featured/clf.jpg",
		imageAlt: "A selection of publications and research by Elham Y. Ali"
	};
</script>

<ArticleLayout {metadata}>
	<Content />
</ArticleLayout>
