<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";
	import Content from "$content/pages/about.svx";

	const metadata = {
		title: "About",
		description:
			"Researcher and data storyteller working across climate change, public health, health equity, and civic technology.",
		href: "/about/",
		image: "/images/home/scv2.jpg",
		imageAlt: "Elham Ali at Community Beautification Day in Valencia Glen Park"
	};
</script>

<ArticleLayout {metadata}>
	<Content />
</ArticleLayout>
