<script>
	import { page } from "$app/state";
</script>

<svelte:head>
	<title
		>{page.status === 404 ? "Page not found" : "Something went wrong"} | Elham Y. Ali</title
	>
	<meta name="robots" content="noindex" />
</svelte:head>

<section>
	<p>{page.status}</p>
	<h1>
		{page.status === 404
			? "This page moved—or never existed."
			: "Something went wrong."}
	</h1>
	<a href="/">Return to featured work →</a>
</section>

<style>
	section {
		width: min(100%, var(--content-width));
		min-height: 65vh;
		margin-inline: auto;
		padding: clamp(5rem, 12vw, 10rem) var(--page-gutter);
	}

	p {
		font-size: var(--font-size-14);
		font-weight: 700;
	}

	h1 {
		max-width: 12ch;
		margin: 1rem 0 3rem;
		font-family: var(--font-serif);
		font-size: clamp(3.625rem, 7.6vw, 7.5rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.05em;
		line-height: 0.95;
	}
</style>
