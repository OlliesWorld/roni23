import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Glob all .svx note files in this directory
	const modules = import.meta.glob('./*.svx', { eager: true });

	const notes = Object.entries(modules).map(([path, mod]) => {
		const m = mod as Record<string, unknown>;
		const metadata = (m.metadata ?? {}) as Record<string, string>;
		return {
			slug: path.replace('./', '').replace('.svx', ''),
			title: metadata.title ?? 'Untitled',
			publishedAt: metadata.publishedAt ?? '',
			author: metadata.author ?? ''
		};
	});

	// Sort newest first
	notes.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

	return { notes };
};
