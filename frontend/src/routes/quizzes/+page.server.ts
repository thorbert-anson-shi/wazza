import type { Actions } from '@sveltejs/kit';
import { ApiService } from '$lib/apiService';
import type { QuizData } from '$lib/types';
import type { PageServerLoad } from './$types';

export const actions = {
	create: async (event) => {
		const data = await event.request.formData();

		const quizTitle = data.get('quizTitle') as string;
		const quizCreator = data.get('quizCreator') as string;
		const quizDescription = data.get('quizDescription') as string;

		const hours = Number(data.get('hours')) || 0;
		const minutes = Number(data.get('minutes')) || 0;
		const seconds = Number(data.get('seconds')) || 0;
		const durationInSeconds = hours * 3600 + minutes * 60 + seconds;

		// Handling multiple checkboxes for categories
		const categories = data.getAll('categories') as string[]; // Gets all selected categories

		// Construct the quiz object
		const quizData = {
			title: quizTitle,
			creatorName: quizCreator,
			description: quizDescription,
			durationInSeconds: durationInSeconds
		};

		let res = await ApiService.createQuiz(JSON.stringify(quizData));
		console.log(res);
	}
} satisfies Actions;
