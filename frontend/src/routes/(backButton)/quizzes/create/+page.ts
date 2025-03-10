import { ApiService } from '$lib/apiService';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	let categories = await ApiService.getCategories();
	return {
		categories: categories
	};
};
