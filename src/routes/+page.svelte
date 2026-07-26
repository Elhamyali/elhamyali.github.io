<script>
	import Homepage from "$components/Homepage.svelte";
	import PageMetadata from "$components/PageMetadata.svelte";
	import { site } from "$data/site.js";

	const image = `${site.url}/images/featured/data-labs.jpeg`;
</script>

<PageMetadata
	title={site.title}
	siteName={site.name}
	author={site.author}
	description={site.description}
	url={`${site.url}/`}
	{image}
	imageAlt="A selection of Elham Y. Ali's research and data visualization work"
	keywords="data visualization, data storytelling, research, human-centered design, public health"
/>
<Homepage />
