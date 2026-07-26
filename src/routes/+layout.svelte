<script>
	import "$styles/app.css";
	import AccessibilityWidget from "$components/AccessibilityWidget.svelte";
	import BackToTop from "$components/BackToTop.svelte";
	import SiteFooter from "$components/SiteFooter.svelte";
	import SiteHeader from "$components/SiteHeader.svelte";

	let { children } = $props();
</script>

<a class="skip-to-main" href="#content">Skip to main content</a>
<SiteHeader />
<main id="content">{@render children?.()}</main>
<SiteFooter />
<BackToTop />
<AccessibilityWidget />
