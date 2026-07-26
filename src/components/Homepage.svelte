<script>
	import ProjectCard from "$components/ProjectCard.svelte";
	import { researchProjects, stories } from "$data/projects.js";
</script>

<div class="page-shell">
	<section class="hero" aria-labelledby="hero-title">
		<p class="pronunciation">
			Pronounced
			<a href="https://www.name-coach.com/elhamyali" target="_blank" rel="noreferrer"
				>ill-huhm</a
			>
			(she/ella/هي)
		</p>
		<h1
			id="hero-title"
			class="role-statement"
			aria-label="Hi, I'm Elham. I'm a researcher, data storyteller, and data visualization developer."
		>
			<span class="role-statement__intro"
				>Hi <span class="wave" aria-hidden="true">👋</span>, I’m Elham. I’m a</span
			>
			<span class="role-rotator" aria-hidden="true">
				<span class="role-rotator__word">Researcher.</span>
				<span class="role-rotator__word">Data storyteller.</span>
				<span class="role-rotator__word">Data Visualization Developer.</span>
			</span>
		</h1>
		<p class="purpose">
			I help local and state governments, nonprofits, startups, and academic
			institutions turn research insights, public data, and community voices into
			interactive stories and digital tools. Working across research, design,
			engineering, and communications teams, I combine qualitative and quantitative
			research, data analysis, human-centered design, and data visualization to create
			data experiences that help people learn, organizations make better decisions, and
			communities drive change in public health, climate justice, and health equity.
		</p>
	</section>

	<section class="work-section" aria-labelledby="stories-title">
		<header class="section-heading">
			<p>Select work</p>
			<h2 id="stories-title">Stories &amp; data visualizations</h2>
			<div>
				I design and build static, interactive, and scrollytelling experiences using R,
				D3.js, Svelte, Highcharts, Flourish, QGIS, HTML, CSS, and JavaScript.
			</div>
		</header>
		<div class="story-grid">
			{#each stories as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<section class="work-section research-section" aria-labelledby="research-title">
		<header class="section-heading">
			<p>Select work</p>
			<h2 id="research-title">Research &amp; human-centered design</h2>
			<div>
				Research, strategy, and service design shaped with organizations and
				communities.
			</div>
		</header>
		<div class="research-grid">
			{#each researchProjects as project}
				<ProjectCard {project} type="research" />
			{/each}
		</div>
	</section>
</div>

<style>
	.page-shell {
		width: min(100%, var(--content-width));
		margin-inline: auto;
		padding-inline: var(--page-gutter);
	}

	.hero {
		max-width: 78rem;
		padding-block: clamp(5rem, 10vw, 9rem);
	}

	.role-statement {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0 0.3em;
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(3.25rem, 6.7vw, 6.75rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.05em;
		line-height: 0.95;
	}

	.role-statement__intro {
		white-space: normal;
	}

	.wave {
		display: inline-block;
		font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
		font-size: 0.82em;
		font-style: normal;
		font-weight: 400;
		letter-spacing: normal;
		line-height: 1;
		transform: translateY(-0.03em);
	}

	.role-rotator {
		display: inline-grid;
		color: var(--color-blue);
	}

	.role-rotator__word {
		grid-area: 1 / 1;
		opacity: 0;
		transform: translateY(0.35em);
		animation: role-cycle 9s infinite;
	}

	.role-rotator__word:nth-child(2) {
		animation-delay: 3s;
	}

	.role-rotator__word:nth-child(3) {
		animation-delay: 6s;
	}

	.pronunciation {
		margin: 0 0 1.25rem;
		color: var(--color-body);
		font-size: var(--font-size-14);
	}

	.purpose {
		max-width: 75rem;
		margin: 2rem 0 0;
		font-size: clamp(1.125rem, 1.5vw, 1.3125rem);
		line-height: 1.55;
	}

	.work-section {
		padding-block: clamp(4rem, 8vw, 8rem);
		border-top: 1px solid var(--color-hairline);
	}

	.section-heading {
		max-width: 58rem;
		margin-bottom: clamp(3rem, 6vw, 6rem);
	}

	.section-heading p {
		margin: 0 0 1.25rem;
		font-size: var(--font-size-12);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h2 {
		margin: 0 0 1.25rem;
		font-family: var(--font-serif);
		font-size: clamp(2.75rem, 5.7vw, 5.75rem);
		font-style: italic;
		font-weight: 600;
		letter-spacing: -0.04em;
		line-height: 0.95;
	}

	.section-heading div {
		max-width: 50rem;
		color: var(--color-ink-soft);
		font-size: clamp(1.125rem, 1.5vw, 1.3125rem);
		line-height: 1.55;
	}

	.story-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(3rem, 7vw, 7rem) clamp(1.5rem, 4vw, 4rem);
	}

	.research-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(3rem, 6vw, 5rem) clamp(1.25rem, 3vw, 3rem);
	}

	@media (max-width: 58rem) {
		.research-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 40rem) {
		.role-statement {
			display: block;
		}

		.role-rotator {
			display: grid;
			width: 100%;
			margin-top: 0.15em;
		}

		.story-grid,
		.research-grid {
			grid-template-columns: 1fr;
		}
	}

	@keyframes role-cycle {
		0%,
		28% {
			opacity: 1;
			transform: translateY(0);
		}

		33%,
		95% {
			opacity: 0;
			transform: translateY(-0.35em);
		}

		96%,
		100% {
			opacity: 0;
			transform: translateY(0.35em);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.role-rotator__word {
			opacity: 0;
			transform: none;
			animation: none;
		}

		.role-rotator__word:first-child {
			opacity: 1;
		}
	}
</style>
