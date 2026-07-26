<script>
	import { site } from "$data/site.js";
</script>

<footer>
	<div class="footer-inner">
		<p class="copyright">© 2026 Elham Y. Ali. All rights reserved.</p>
		<div class="footer-links">
			<a href={site.social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
			<a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
			<a href={site.social.adplist} target="_blank" rel="noreferrer">ADPList ↗</a>
			<a href={site.email}>Email</a>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: clamp(5rem, 10vw, 10rem);
		color: var(--color-white);
		background: var(--color-black);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		width: min(100%, var(--content-width));
		margin-inline: auto;
		padding: 2rem var(--page-gutter);
	}

	.footer-links {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 1rem 2rem;
	}

	.footer-links a {
		font-size: var(--font-size-14);
		font-weight: 700;
	}

	.copyright {
		margin: 0;
		color: #a7abaf;
		font-size: var(--font-size-12);
	}

	@media (max-width: 42rem) {
		.footer-inner {
			align-items: flex-start;
			flex-direction: column-reverse;
		}

		.footer-links {
			justify-content: flex-start;
		}
	}
</style>
