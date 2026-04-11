<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} | Roni</title>
</svelte:head>

<div class="bg-[#05386b] h-screen flex flex-col items-center justify-center text-white">
	<h1 class="text-8xl font-bold text-regal-green">{$page.status}</h1>
	<p class="text-2xl mt-4">
		{#if $page.status === 404}
			Page not found.
		{:else}
			Something went wrong.
		{/if}
	</p>
	<a href="/" class="mt-8 text-regal-green hover:text-white border-b border-regal-green">
		Go home
	</a>
</div>
