<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";
	import Content from "$content/pages/about.svx";

	const metadata = {
		title: "About",
		description:
			"Researcher and data storyteller working across climate change, public health, health equity, and civic technology.",
		href: "/about/",
		image: "/images/about/eya-about-cover.jpg",
		imageAlt: "Elham Ali leading a collaborative workshop"
	};
</script>

<ArticleLayout {metadata}>
	<Content />
</ArticleLayout>
