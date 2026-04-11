<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Roni Developer Portfolio | Front-end Developer</title>
	<meta
		name="description"
		content="I am a front-end developer backed by grit and tenacity. Looking for my next full-time opportunity."
	/>
	<meta property="og:title" content="Roni Developer Portfolio" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

{@render children()}
<Footer />
