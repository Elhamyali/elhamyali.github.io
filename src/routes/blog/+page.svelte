<script>
	import PageMetadata from "$components/PageMetadata.svelte";
	import { blogPosts } from "$data/content.js";
	import { site } from "$data/site.js";
</script>

<PageMetadata
	title={`Blog | ${site.name}`}
	siteName={site.name}
	author={site.author}
	description="Writing by Elham Y. Ali about storytelling, research, design, and learning."
	url={`${site.url}/blog/`}
/>

<section class="blog-index">
	<header>
		<p>Writing</p>
		<h1>Blog</h1>
	</header>
	<div class="post-list">
		{#each [...blogPosts].reverse() as post}
			<article>
				<p>
					<time datetime={post.date}>{post.date}</time>
					{#each post.categories as category}<span>{category}</span>{/each}
				</p>
				<a
					class="post-image"
					href={post.href}
					aria-label={`Read ${post.title}`}
					target={post.migrated ? undefined : "_blank"}
					rel={post.migrated ? undefined : "noreferrer"}
				>
					<img src={post.image} alt={post.imageAlt} loading="lazy" />
				</a>
				<h2><a href={post.href}>{post.title}</a></h2>
				<div>{post.description}</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.blog-index {
		width: min(100%, var(--content-width));
		margin-inline: auto;
		padding: clamp(5rem, 10vw, 9rem) var(--page-gutter);
	}

	header p {
		margin: 0 0 1rem;
		font-size: var(--font-size-14);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0 0 clamp(4rem, 8vw, 7rem);
		font-family: var(--font-serif);
		font-size: clamp(3.625rem, 7.6vw, 7.5rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.05em;
		line-height: 0.92;
	}

	article {
		display: grid;
		grid-template-columns:
			minmax(8rem, 0.4fr) minmax(12rem, 0.7fr) minmax(16rem, 1fr)
			minmax(16rem, 1fr);
		gap: 2rem clamp(2rem, 5vw, 6rem);
		padding-block: 2rem;
		border-top: 1px solid var(--color-hairline);
	}

	article p {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 0.35rem;
		margin: 0;
		color: var(--color-body);
		font-size: var(--font-size-12);
	}

	.post-image {
		display: block;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		background: var(--color-canvas-soft);
	}

	.post-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h2 {
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(1.75rem, 3vw, 3rem);
		font-style: italic;
		line-height: 1.05;
	}

	h2 a {
		text-decoration: none;
	}

	article div {
		font-size: var(--font-size-16);
		line-height: 1.55;
	}

	@media (max-width: 64rem) {
		article {
			grid-template-columns: minmax(8rem, 0.4fr) minmax(12rem, 0.7fr) 1fr;
			gap: 1rem;
		}

		article div {
			grid-column: 2 / -1;
		}
	}

	@media (max-width: 48rem) {
		article {
			grid-template-columns: 1fr;
		}

		article div {
			grid-column: auto;
		}
	}
</style>
