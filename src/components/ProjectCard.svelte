<script>
	let { project, type = "story" } = $props();
	let external = $derived(project.href.startsWith("http"));

	const toolClasses = {
		"D3.js": "d3",
		JavaScript: "javascript",
		R: "r",
		Svelte: "svelte",
		Figma: "figma",
		"rough.js": "rough",
		QGIS: "qgis",
		Highcharts: "highcharts",
		Flourish: "flourish",
		Mustache: "moustache"
	};
</script>

<article class:research={type === "research"}>
	<a
		class="card-link"
		href={project.href}
		target={external ? "_blank" : undefined}
		rel={external ? "noreferrer" : undefined}
		aria-label={`${external ? "Read" : "View"} ${project.title}${external ? " (opens in a new tab)" : ""}`}
	>
		<div class="media">
			{#if project.mediaType === "video"}
				<video
					autoplay
					loop
					muted
					playsinline
					preload="metadata"
					aria-label={project.alt}
				>
					<source src={project.media} type="video/mp4" />
				</video>
			{:else}
				<img src={project.media} alt={project.alt} loading="lazy" />
			{/if}
		</div>
		<div class="card-copy">
			<span class="arrow" aria-hidden="true">↗</span>
			{#if project.organization}
				<p class="organization">{project.organization}</p>
			{/if}
			<h3>{project.title}</h3>
			{#if project.description}<p class="description">{project.description}</p>{/if}
			{#if project.tools}
				<ul aria-label="Tools used">
					{#each project.tools as tool}
						<li class={`tool-badge tool-badge--${toolClasses[tool] || "default"}`}>
							{tool}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</a>
</article>

<style>
	article {
		min-width: 0;
	}

	.card-link {
		display: grid;
		height: 100%;
		color: var(--color-black);
		text-decoration: none;
	}

	.media {
		overflow: hidden;
		aspect-ratio: 16 / 10;
		background: var(--color-canvas-soft);
	}

	.media :global(img),
	.media :global(video) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 500ms ease;
	}

	.card-copy {
		position: relative;
		padding: 1.25rem 3rem 1.75rem 0;
	}

	.arrow {
		position: absolute;
		top: 1.2rem;
		right: 0;
		font-size: 1.35rem;
		transition: transform 200ms ease;
	}

	h3 {
		max-width: 27ch;
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(1.65rem, 2.5vw, 2.5rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.025em;
		line-height: 1.08;
	}

	.description {
		margin: 1rem 0 0;
		color: var(--color-ink-soft);
		font-size: var(--font-size-16);
		line-height: 1.55;
	}

	.organization {
		margin: 0 0 0.55rem;
		color: var(--color-body);
		font-size: var(--font-size-12);
		font-weight: 700;
		letter-spacing: 0.06em;
		line-height: 1.3;
		text-transform: uppercase;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 1.25rem 0 0;
		padding: 0;
		list-style: none;
	}

	.tool-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.2rem 0.62rem 0.16rem;
		border: 2px solid currentColor;
		border-radius: 999px;
		background: color-mix(in srgb, currentColor 9%, transparent);
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.035em;
		line-height: 1.15;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.tool-badge--d3 {
		color: var(--color-blue);
	}
	.tool-badge--javascript {
		color: var(--color-purple);
	}
	.tool-badge--r {
		color: var(--color-magenta);
	}
	.tool-badge--svelte {
		color: var(--color-orange);
	}
	.tool-badge--figma {
		color: var(--color-yellow);
	}
	.tool-badge--rough {
		color: var(--color-teal);
	}
	.tool-badge--qgis {
		color: var(--color-green);
	}
	.tool-badge--highcharts {
		color: var(--color-red);
	}
	.tool-badge--flourish {
		color: var(--color-blue-supporting);
	}
	.tool-badge--moustache,
	.tool-badge--default {
		color: var(--color-grey-dark);
	}

	.research h3 {
		font-size: clamp(1.4rem, 2vw, 2rem);
	}

	@media (hover: hover) {
		.card-link:hover .media :global(img),
		.card-link:hover .media :global(video) {
			transform: scale(1.025);
		}

		.card-link:hover .arrow {
			transform: translate(0.2rem, -0.2rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.media :global(img),
		.media :global(video),
		.arrow {
			transition: none;
		}
	}
</style>
