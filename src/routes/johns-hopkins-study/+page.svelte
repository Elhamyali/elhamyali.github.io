<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";
	import Content from "$content/pages/johns-hopkins-study.svx";

	const metadata = {
		title: "Join a Johns Hopkins Study on Parks and Green Spaces",
		description:
			"Join a national study about what helps U.S. local governments make parks and green spaces more equitable, resilient, and responsive to community needs.",
		href: "/johns-hopkins-study/",
		image: "/images/johns-hopkins-study/parks3.png",
		imageAlt: "A park path surrounded by trees"
	};
</script>

<ArticleLayout {metadata}>
	<Content />
</ArticleLayout>
