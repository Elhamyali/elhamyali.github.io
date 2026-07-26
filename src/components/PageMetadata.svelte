<script>
	let {
		title = "",
		description = "",
		author = "",
		siteName = title,
		url = "",
		image = "",
		imageAlt = "",
		imageType = "image/jpeg",
		imageWidth = 1200,
		imageHeight = 630,
		keywords = "",
		type = "website"
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if author}<meta name="author" content={author} />{/if}
	{#if keywords}<meta name="keywords" content={keywords} />{/if}
	<meta name="robots" content="max-image-preview:large" />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content="en_US" />
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:secure_url" content={image} />
		<meta property="og:image:type" content={imageType} />
		<meta property="og:image:width" content={imageWidth} />
		<meta property="og:image:height" content={imageHeight} />
		<meta property="og:image:alt" content={imageAlt || title} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
		<meta name="twitter:image:alt" content={imageAlt || title} />
	{/if}

	{#if url}<link rel="canonical" href={url} />{/if}
</svelte:head>
