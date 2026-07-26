<script>
	import { onMount } from "svelte";

	onMount(() => {
		if (document.querySelector('script[data-account="M4YO8zAZCv"]')) return;

		const script = document.createElement("script");
		script.dataset.position = "3";
		script.dataset.account = "M4YO8zAZCv";
		script.src = "https://cdn.userway.org/widget.js";
		script.async = true;
		document.body.appendChild(script);
	});
</script>
