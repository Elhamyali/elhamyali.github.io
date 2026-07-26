<script>
	import { onMount } from "svelte";

	let visible = $state(false);

	onMount(() => {
		const update = () => (visible = window.scrollY > 600);
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	});

	function backToTop() {
		window.scrollTo({
			top: 0,
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
				? "auto"
				: "smooth"
		});
	}
</script>

{#if visible}
	<button class="back-to-top" type="button" onclick={backToTop}>
		<span aria-hidden="true">↑</span>
		Back to top
	</button>
{/if}

<style>
	.back-to-top {
		position: fixed;
		z-index: 80;
		left: 50%;
		bottom: 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.75rem 1rem;
		border: 1px solid var(--color-fg);
		border-radius: 0;
		color: var(--color-bg);
		background: var(--color-fg);
		font-family: var(--font-sans);
		font-size: var(--font-size-14);
		font-weight: 700;
		transform: translateX(-50%);
		transition:
			color 140ms ease,
			background-color 140ms ease;
	}

	.back-to-top:hover,
	.back-to-top:focus-visible {
		color: var(--color-fg);
		background: var(--color-bg);
	}

	.back-to-top:active {
		color: var(--color-bg);
		background: var(--color-blue);
		transform: translateX(-50%) translateY(2px);
	}

	@media (prefers-reduced-motion: reduce) {
		.back-to-top {
			transition: none;
		}
	}
</style>
