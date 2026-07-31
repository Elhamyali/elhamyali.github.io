<script>
	const clients = [
		{
			name: "Avocado Green Brands",
			logo: "/images/clients/optimized/avocado_green_brands_logo.png"
		},
		{
			name: "Bureau Veritas",
			logo: "/images/clients/optimized/bureau_veritas_logo.png"
		},
		{
			name: "Feeding America",
			logo: "/images/clients/optimized/feeding_america_logo.png"
		},
		{
			name: "Friends From The City",
			logo: "/images/clients/optimized/friends_from_the_city_logo.png"
		},
		{ name: "JustSafe", logo: "/images/clients/optimized/just_safe_logo.png" },
		{ name: "Nestlé", logo: "/images/clients/optimized/nestle_logo.png" },
		{
			name: "New York State Department of Health AIDS Institute",
			logo: "/images/clients/optimized/nys_doh_aids_institute_logo.png"
		},
		{
			name: "Pima County Health Department",
			logo: "/images/clients/optimized/pima_county_health_department_logo.png"
		},
		{
			name: "Port of Portland",
			logo: "/images/clients/optimized/port_of_portland_logo.png"
		},
		{
			name: "United Vein & Vascular Centers",
			logo: "/images/clients/optimized/united_vein_centers_logo.png"
		},
		{
			name: "U.S. Digital Response",
			logo: "/images/clients/optimized/us_digital_response_logo.png"
		},
		{
			name: "Zebras Unite Capital",
			logo: "/images/clients/optimized/zebras_unite_capital_logo.png"
		}
	];

	let paused = $state(false);
</script>

<section class="client-marquee" aria-labelledby="client-marquee-title">
	<div class="client-marquee__heading">
		<h2 id="client-marquee-title">Clients &amp; collaborators</h2>
		<button
			type="button"
			class="client-marquee__control"
			aria-pressed={paused}
			aria-label={paused ? "Play client logo animation" : "Pause client logo animation"}
			title={paused ? "Play client logo animation" : "Pause client logo animation"}
			onclick={() => (paused = !paused)}
		>
			<span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
		</button>
	</div>

	<div class="client-marquee__viewport" class:is-paused={paused}>
		<div class="client-marquee__track">
			<ul class="client-marquee__group">
				{#each clients as client}
					<li class="client-logo">
						<img src={client.logo} alt={client.name} loading="lazy" />
					</li>
				{/each}
			</ul>

			<ul class="client-marquee__group" aria-hidden="true">
				{#each clients as client}
					<li class="client-logo">
						<img src={client.logo} alt="" loading="lazy" />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.client-marquee {
		padding-block: clamp(2.5rem, 5vw, 4.5rem);
		border-block: 1px solid var(--color-hairline);
		overflow: hidden;
	}

	.client-marquee__heading {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: clamp(2rem, 4vw, 3.25rem);
	}

	h2 {
		margin: 0;
		color: var(--color-body);
		font-family: var(--font-sans);
		font-size: var(--font-size-12);
		font-weight: 700;
		letter-spacing: 0.18em;
		line-height: 1.3;
		text-align: center;
		text-transform: uppercase;
	}

	.client-marquee__control {
		position: absolute;
		right: 0;
		display: grid;
		width: 2rem;
		height: 2rem;
		padding: 0;
		place-items: center;
		border: 1px solid var(--color-hairline);
		border-radius: 50%;
		color: var(--color-body);
		background: transparent;
		font: inherit;
		font-size: 0.75rem;
		line-height: 1;
		cursor: pointer;
	}

	.client-marquee__control:hover {
		color: var(--color-fg);
		border-color: currentColor;
	}

	.client-marquee__viewport {
		width: 100%;
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
	}

	.client-marquee__track {
		display: flex;
		width: max-content;
		animation: client-marquee-scroll 42s linear infinite;
	}

	.client-marquee__viewport:hover .client-marquee__track,
	.client-marquee__viewport:focus-within .client-marquee__track,
	.client-marquee__viewport.is-paused .client-marquee__track {
		animation-play-state: paused;
	}

	.client-marquee__group {
		display: flex;
		align-items: center;
		gap: clamp(2.5rem, 6vw, 6rem);
		margin: 0;
		padding: 0 clamp(2.5rem, 6vw, 6rem) 0 0;
		list-style: none;
	}

	.client-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 auto;
		background: transparent;
	}

	.client-logo img {
		display: block;
		width: auto;
		height: auto;
		max-width: clamp(7.5rem, 12vw, 10rem);
		max-height: clamp(3rem, 5vw, 4.25rem);
		filter: grayscale(1) contrast(0.9);
		opacity: 0.62;
		mix-blend-mode: multiply;
		background: transparent;
	}

	:global(:root[data-theme="dark"]) .client-logo img {
		filter: grayscale(1) invert(1) contrast(0.9);
		opacity: 0.72;
		mix-blend-mode: screen;
	}

	@keyframes client-marquee-scroll {
		to {
			transform: translateX(-50%);
		}
	}

	@media (max-width: 40rem) {
		.client-marquee__heading {
			padding-right: 2.75rem;
		}

		h2 {
			width: 100%;
			text-align: left;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.client-marquee__control {
			display: none;
		}

		.client-marquee__viewport {
			mask-image: none;
			overflow-x: auto;
		}

		.client-marquee__track {
			animation: none;
		}

		.client-marquee__group[aria-hidden="true"] {
			display: none;
		}
	}
</style>
