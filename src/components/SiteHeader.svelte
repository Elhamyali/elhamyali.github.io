<script>
	import { onMount } from "svelte";
	import SearchPanel from "$components/SearchPanel.svelte";
	import { site } from "$data/site.js";

	let menuOpen = $state(false);
	let searchOpen = $state(false);
	let darkMode = $state(false);

	onMount(() => {
		darkMode = document.documentElement.dataset.theme === "dark";
	});

	function toggleTheme() {
		darkMode = !darkMode;
		document.documentElement.dataset.theme = darkMode ? "dark" : "light";
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}
</script>

<header class="site-header">
	<div class="header-inner">
		<a class="wordmark" href="/" aria-label="Elham Y. Ali, home">
			<img src="/images/brand/eya-logo.jpg" alt="" width="100" height="100" />
			<span>{site.name}</span>
		</a>
		<div class="navigation-cluster">
			<button
				class="menu-button"
				type="button"
				aria-expanded={menuOpen}
				aria-controls="site-navigation"
				onclick={() => (menuOpen = !menuOpen)}
			>
				{menuOpen ? "Close" : "Menu"}
			</button>
			<nav id="site-navigation" class:open={menuOpen} aria-label="Primary navigation">
				{#each site.navigation as item}
					<a href={item.href} onclick={() => (menuOpen = false)}>{item.label}</a>
				{/each}
			</nav>
			<div class="header-controls">
				<button
					class="icon-button theme-toggle"
					type="button"
					aria-label={darkMode ? "Use light mode" : "Use dark mode"}
					aria-pressed={darkMode}
					onclick={toggleTheme}
				>
					<span class="toggle-track" aria-hidden="true"
						><span class:active={darkMode}></span></span
					>
				</button>
				<button
					class="icon-button"
					type="button"
					aria-label="Search site"
					onclick={() => (searchOpen = true)}
				>
					<svg aria-hidden="true" viewBox="0 0 24 24">
						<circle cx="10.5" cy="10.5" r="6.5"></circle>
						<path d="m15.5 15.5 5 5"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>

{#if searchOpen}
	<SearchPanel onclose={() => (searchOpen = false)} />
{/if}

<style>
	.site-header {
		position: relative;
		z-index: 10;
		border-bottom: 1px solid var(--color-hairline);
		background: var(--color-bg);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		width: min(100%, var(--content-width));
		min-height: 4.75rem;
		margin-inline: auto;
		padding-inline: var(--page-gutter);
	}

	.wordmark {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		flex: 0 0 auto;
		font-family: var(--font-sans);
		font-size: var(--font-size-14);
		font-style: normal;
		font-weight: 600;
		text-decoration: none;
	}

	.wordmark img {
		display: block;
		width: 2rem;
		height: 2rem;
		object-fit: cover;
	}

	.navigation-cluster {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: clamp(0.75rem, 1.5vw, 1.25rem);
		margin-left: auto;
	}

	nav {
		display: flex;
		align-items: center;
		gap: clamp(1rem, 2.2vw, 2rem);
	}

	nav a {
		font-size: var(--font-size-14);
		font-weight: 600;
		text-decoration: none;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.header-controls {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}

	.icon-button {
		display: grid;
		width: 2.25rem;
		height: 2.25rem;
		padding: 0;
		place-items: center;
		border: 0;
		border-radius: 0;
		color: var(--color-fg);
		background: transparent;
	}

	.icon-button svg {
		width: 1.65rem;
		height: 1.65rem;
		fill: none;
		stroke: currentColor;
		stroke-linecap: square;
		stroke-width: 1.75;
	}

	.theme-toggle {
		width: 2.6rem;
	}

	.toggle-track {
		display: flex;
		align-items: center;
		width: 2rem;
		height: 1rem;
		padding: 0.125rem;
		border: 1px solid currentColor;
		border-radius: 999px;
	}

	.toggle-track span {
		width: 0.65rem;
		height: 0.65rem;
		border-radius: 999px;
		background: currentColor;
		transition: transform 160ms ease;
	}

	.toggle-track span.active {
		transform: translateX(0.95rem);
	}

	.menu-button {
		display: none;
		padding: 0.45rem 0.7rem;
		border: 1px solid var(--color-black);
		border-radius: 0;
		color: var(--color-fg);
		background: var(--color-bg);
		font-size: var(--font-size-14);
		font-weight: 700;
	}

	@media (max-width: 54rem) {
		.header-inner {
			padding-block: 1rem;
		}

		.navigation-cluster {
			position: relative;
			gap: 0.5rem;
		}

		.menu-button {
			display: block;
		}

		nav {
			position: absolute;
			top: calc(100% + 1rem);
			right: 0;
			display: none;
			width: min(20rem, calc(100vw - 2 * var(--page-gutter)));
			align-items: flex-start;
			flex-direction: column;
			gap: 0;
			padding: 0.75rem 1rem;
			border: 1px solid var(--color-hairline);
			background: var(--color-bg);
		}

		nav.open {
			display: flex;
		}

		nav a {
			width: 100%;
			padding-block: 0.7rem;
			border-top: 1px solid var(--color-hairline);
		}
	}
</style>
