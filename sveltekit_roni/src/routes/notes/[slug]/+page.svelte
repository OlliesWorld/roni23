<script lang="ts">
	import type { Component } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData & { component: Component };
</script>

<svelte:head>
	<title>{data.title} | Notes | Roni</title>
</svelte:head>

<main class="bg-slate-800 min-h-screen pb-12 px-4">
	<div class="md:w-1/2 m-auto text-white pt-8">
		<a href="/notes" class="text-regal-green hover:text-white mb-6 inline-block">&larr; Back to Notes</a>
		<h1 class="text-4xl font-bold text-[#8b8b00] mb-2">{data.title}</h1>
		{#if data.publishedAt}
			<p class="text-sm text-gray-400 mb-8">Date: {data.publishedAt}</p>
		{/if}
		<div class="prose prose-invert max-w-none">
			<svelte:component this={data.component} />
		</div>
	</div>
</main>
