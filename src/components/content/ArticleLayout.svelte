<script>
	import PageMetadata from "$components/PageMetadata.svelte";
	import { site } from "$data/site.js";

	let { metadata, previous = null, next = null, children } = $props();

	const canonicalUrl = $derived(`${site.url}${metadata.href}`);
	const socialImage = $derived(
		metadata.image?.startsWith("http") ? metadata.image : `${site.url}${metadata.image}`
	);
</script>

<PageMetadata
	title={`${metadata.organization ? `${metadata.organization} — ` : ""}${metadata.title} | ${site.name}`}
	siteName={site.name}
	author={site.author}
	description={metadata.description}
	url={canonicalUrl}
	image={socialImage}
	imageType={socialImage.endsWith(".png") ? "image/png" : "image/jpeg"}
	imageAlt={metadata.imageAlt || metadata.alt || metadata.title}
	keywords={metadata.categories?.join(", ") || ""}
	type="article"
/>

<article>
	<header class="article-header">
		{#if metadata.organization}<p class="organization">{metadata.organization}</p>{/if}
		<h1>{metadata.title}</h1>
		{#if metadata.description}<p class="dek">{metadata.description}</p>{/if}
		<div class="article-meta">
			{#if metadata.date}
				<time datetime={metadata.date}>
					{new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
						timeZone: "UTC"
					}).format(new Date(metadata.date))}
				</time>
			{/if}
			{#if metadata.categories}
				<ul aria-label="Categories">
					{#each metadata.categories as category}<li>{category}</li>{/each}
				</ul>
			{/if}
		</div>
	</header>

	<div class="article-body">
		{@render children?.()}
	</div>

	{#if previous || next}
		<nav class="article-navigation" aria-label="Adjacent articles">
			{#if previous}
				<a class="previous" href={previous.href}>
					<span>Previous</span>
					<strong>← {previous.organization || previous.title}</strong>
				</a>
			{:else}
				<span></span>
			{/if}
			{#if next}
				<a class="next" href={next.href}>
					<span>Next</span>
					<strong>{next.organization || next.title} →</strong>
				</a>
			{/if}
		</nav>
	{/if}
</article>

<style>
	article {
		width: min(100%, var(--content-width));
		margin-inline: auto;
		padding-inline: var(--page-gutter);
	}

	.article-header {
		max-width: 70rem;
		padding-block: clamp(5rem, 10vw, 9rem);
	}

	.organization {
		margin: 0 0 1.25rem;
		font-size: var(--font-size-14);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(3.625rem, 7.6vw, 7.5rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.05em;
		line-height: 0.92;
	}

	.dek {
		max-width: 50rem;
		margin: 2rem 0 0;
		font-size: clamp(1.25rem, 2.1vw, 1.875rem);
		line-height: 1.35;
	}

	.article-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 2rem;
		align-items: flex-start;
		margin-top: 2rem;
		color: var(--color-body);
		font-size: var(--font-size-12);
	}

	.article-meta ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.article-meta li {
		padding: 0.2rem 0.55rem;
		border: 1px solid currentColor;
		border-radius: 999px;
	}

	.article-body {
		max-width: 70rem;
		margin-inline: 0;
		font-family: var(--font-sans);
		font-size: clamp(1.125rem, 1.5vw, 1.3125rem);
		line-height: 1.62;
	}

	.article-body :global(h2) {
		margin: clamp(4rem, 8vw, 7rem) 0 1.5rem;
		font-family: var(--font-serif);
		font-size: clamp(2.75rem, 5vw, 5rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.04em;
		line-height: 0.98;
	}

	.article-body :global(p) {
		margin: 0 0 1.5rem;
	}

	.article-body :global(a) {
		color: var(--color-link);
	}

	.article-body :global(.study-btn-wrapper) {
		margin: 1rem 0 2rem;
		text-align: left;
	}

	.article-body :global(.study-btn) {
		display: inline-block;
		padding: 0.75rem 1rem;
		border: 1px solid var(--color-fg);
		border-radius: 0;
		color: var(--color-bg);
		background: var(--color-fg);
		font-family: var(--font-sans);
		font-size: var(--font-size-16);
		font-weight: 700;
		line-height: 1.25;
		text-decoration: none;
	}

	.article-body :global(a.study-btn:hover),
	.article-body :global(a.study-btn:focus-visible) {
		color: var(--color-fg);
		background: var(--color-bg);
	}

	.article-body :global(.study-btn.disabled) {
		border-color: var(--color-grey-dark);
		color: var(--color-grey-dark);
		background: var(--color-canvas-soft);
		cursor: not-allowed;
	}

	.article-body :global(img) {
		width: 100%;
		height: auto;
	}

	.article-body :global(.lead-image) {
		margin: 0 0 clamp(3rem, 7vw, 6rem);
	}

	.article-body :global(.media-grid) {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		width: 100%;
		margin: clamp(3rem, 6vw, 5rem) 0;
	}

	.article-body :global(.story-text) {
		margin-block: 3rem;
		font-size: inherit;
		line-height: inherit;
	}

	.article-navigation {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		margin-top: clamp(5rem, 10vw, 10rem);
		padding-block: 2rem;
		border-top: 1px solid var(--color-hairline);
	}

	.article-navigation a {
		display: grid;
		gap: 0.35rem;
		text-decoration: none;
	}

	.article-navigation span {
		color: var(--color-body);
		font-size: var(--font-size-12);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.article-navigation strong {
		font-family: var(--font-serif);
		font-size: clamp(1.25rem, 2vw, 1.75rem);
		font-style: italic;
		font-weight: 600;
	}

	.next {
		text-align: right;
	}

	@media (max-width: 42rem) {
		.article-body :global(.media-grid),
		.article-navigation {
			grid-template-columns: 1fr;
		}
	}
</style>
