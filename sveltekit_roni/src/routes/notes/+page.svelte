<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Notes | Roni</title>
</svelte:head>

<main class="bg-slate-800 h-full pb-12">
	<h2 class="text-6xl text-[#8b8b00] text-center pt-6">Notes</h2>
	<section class="text-white md:w-1/2 m-auto px-4">
		<p class="mb-4">Somewhere I can keep notes of things I have done and found helpful.</p>

		{#if data.notes.length === 0}
			<p class="text-gray-400 mt-8">No notes yet — add <code>.svx</code> files to this folder.</p>
		{/if}

		{#each data.notes as note}
			<a href="/notes/{note.slug}" class="block border-4 border-blue-900 mb-8 hover:border-blue-700 transition-colors">
				<div class="flex justify-between px-4 mb-4 m-auto text-2xl font-bold pt-4">
					<p>{note.title}</p>
					{#if note.author}
						<p>{note.author}</p>
					{/if}
				</div>
				<p class="text-sm m-2 px-4">Date: {note.publishedAt ?? ''}</p>
			</a>
		{/each}
	</section>
</main>
