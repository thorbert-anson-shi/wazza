import { ApiService } from '$lib/apiService';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let res = await ApiService.getQuizById(params.id);
	let data = res[0];
	return {
		id: params.id,
		title: data.title,
		thumbnail: data.thumbnail,
		creator: data.creatorName,
		description: data.description,
		durationInSeconds: data.durationInSeconds
	};
};
