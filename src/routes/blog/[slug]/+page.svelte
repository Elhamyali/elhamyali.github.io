<script>
	import ArticleLayout from "$components/content/ArticleLayout.svelte";

	let { data } = $props();

	const contentModules = import.meta.glob("/src/content/blog/*.svx", { eager: true });
	const Content = $derived(
		contentModules[`/src/content/blog/${data.metadata.slug}.svx`]?.default
	);
</script>

{#if Content}
	<ArticleLayout {...data}>
		<Content />
	</ArticleLayout>
{/if}
