import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { pageRoutes } from '$lib/routes';

export const load: PageLoad = () => {
	throw redirect(308, pageRoutes.home);
};
