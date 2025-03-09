import type { QuizDetails } from '$lib/types';
import type { PageLoad } from './$types';
import { ApiService } from '$lib/apiService';

export const load: PageLoad = async ({ params }) => {
	let res = await ApiService.getQuizById(params.id);
	let data = res[0];

	return {
		id: data.id,
		title: data.title,
		creatorName: data.creatorName,
		description: data.description,
		durationInSeconds: data.durationInSeconds,
		lastUpdated: {
			date: new Date(data.lastUpdated).getDate(),
			month: new Date(data.lastUpdated).getMonth(),
			year: new Date(data.lastUpdated).getFullYear()
		}
	};
};

class QuizNotFoundError extends Error {}
