<script>
	import { onMount } from "svelte";

	let { onclose } = $props();
	let query = $state("");
	let entries = $state([]);

	const results = $derived.by(() => {
		const needle = query.trim().toLowerCase();
		if (!needle) return [];
		return entries
			.filter((entry) =>
				[entry.title, entry.description, ...(entry.categories || [])]
					.join(" ")
					.toLowerCase()
					.includes(needle)
			)
			.slice(0, 10);
	});

	onMount(async () => {
		const response = await fetch("/search.json");
		if (response.ok) entries = await response.json();
	});
</script>

<svelte:window onkeydown={(event) => event.key === "Escape" && onclose()} />

<div
	class="backdrop"
	role="presentation"
	onclick={(event) => event.target === event.currentTarget && onclose()}
>
	<div
		class="search-panel"
		role="dialog"
		aria-modal="true"
		aria-labelledby="search-title"
	>
		<header>
			<h2 id="search-title">Search</h2>
			<button type="button" aria-label="Close search" onclick={onclose}>Close</button>
		</header>
		<label for="site-search">Search projects, writing, and pages</label>
		<input
			id="site-search"
			type="search"
			placeholder="Start typing…"
			bind:value={query}
		/>

		{#if query.trim()}
			<p class="result-count" aria-live="polite">
				{results.length}
				{results.length === 1 ? "result" : "results"}
			</p>
			<ul>
				{#each results as result}
					<li>
						<a href={result.url} onclick={onclose}>
							<strong>{result.title}</strong>
							<span>{result.description}</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.backdrop {
		position: fixed;
		z-index: 100;
		inset: 0;
		padding: clamp(1rem, 5vw, 4rem);
		background: rgb(0 0 0 / 0.72);
	}

	.search-panel {
		width: min(100%, 48rem);
		max-height: calc(100vh - 2rem);
		margin-inline: auto;
		overflow: auto;
		padding: clamp(1.5rem, 4vw, 3rem);
		color: var(--color-fg);
		background: var(--color-bg);
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	h2 {
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(2.75rem, 6vw, 5rem);
		font-style: italic;
		line-height: 0.95;
	}

	button,
	input {
		border: 1px solid var(--color-fg);
		border-radius: 0;
		color: var(--color-fg);
		background: var(--color-bg);
		font-family: var(--font-sans);
	}

	button {
		padding: 0.65rem 0.85rem;
		font-weight: 700;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-size: var(--font-size-14);
		font-weight: 700;
	}

	input {
		width: 100%;
		padding: 0.9rem 1rem;
		font-size: var(--font-size-18);
	}

	.result-count {
		margin: 1.5rem 0 0;
		color: var(--color-body);
		font-size: var(--font-size-14);
	}

	ul {
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
	}

	li {
		border-top: 1px solid var(--color-hairline);
	}

	li a {
		display: grid;
		gap: 0.25rem;
		padding: 1rem 0;
		text-decoration: none;
	}

	li a:hover strong {
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	li span {
		color: var(--color-body);
		font-size: var(--font-size-14);
	}
</style>
