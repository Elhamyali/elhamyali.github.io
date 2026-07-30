<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";
	import Content from "$content/pages/contact.svx";

	const metadata = {
		title: "Contact",
		description:
			"Thanks for stopping by. I'm currently open to new opportunities and collaborations. Have a project in mind, an opportunity, or just want to connect? I'd love to hear from you. You can reach me through any of these options:",
		href: "/contact/",
		image: "/images/about/elham-ali.jpg",
		imageAlt: "Elham Y. Ali"
	};
</script>

<ArticleLayout {metadata}>
	<Content />
</ArticleLayout>
