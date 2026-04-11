import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const modules = import.meta.glob('../*.svx');
		const path = `../${params.slug}.svx`;

		if (!modules[path]) {
			throw error(404, 'Note not found');
		}

		const mod = (await modules[path]()) as Record<string, unknown>;
		const metadata = (mod.metadata ?? {}) as Record<string, string>;

		return {
			component: mod.default,
			title: metadata.title ?? 'Untitled',
			publishedAt: metadata.publishedAt ?? '',
			author: metadata.author ?? ''
		};
	} catch (e) {
		throw error(404, 'Note not found');
	}
};
