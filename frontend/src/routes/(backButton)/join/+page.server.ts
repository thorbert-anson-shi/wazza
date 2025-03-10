import { ApiService } from '$lib/apiService';
import { pageRoutes } from '$lib/routes';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		let data = await event.request.formData();

		let quiz;
		try {
			quiz = (await ApiService.getQuizById(data.get('quizId') as string))[0];
		} catch (error) {
			console.log(error);
		}

		redirect(303, pageRoutes.join.quiz(quiz!.id));
	}
} satisfies Actions;
