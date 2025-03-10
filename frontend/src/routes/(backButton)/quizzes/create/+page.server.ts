import { fail, redirect, type Actions } from '@sveltejs/kit';
import { ApiService } from '$lib/apiService';
import { z } from 'zod';
import { pageRoutes } from '$lib/routes';

const quizDataSchema = z.object({
	quizTitle: z.string().max(256).nonempty('Title cannot be empty'),
	quizCreator: z.string().max(256).nonempty('Creator cannot be empty'),
	quizDescription: z.string(),
	hours: z.number().nonnegative('Field cannot be negative'),
	minutes: z
		.number()
		.lt(60, 'Please provide a valid value for minutes')
		.nonnegative('Field cannot be negative'),
	seconds: z
		.number()
		.lt(60, 'Please provide a valid value for seconds')
		.nonnegative('Field cannot be negative')
});

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const quizTitle = data.get('quizTitle') as string;
		const quizCreator = data.get('quizCreator') as string;
		const quizDescription = data.get('quizDescription') as string;

		const hours = Number(data.get('hours')) || 0;
		const minutes = Number(data.get('minutes')) || 0;
		const seconds = Number(data.get('seconds')) || 0;

		const thumbnail = data.get('quizThumbnail') as string;

		// Handling multiple checkboxes for categories
		const categories = data.get('categories') as string; // Gets all selected categories

		let validationResult = quizDataSchema.safeParse({
			quizTitle: quizTitle,
			quizCreator: quizCreator,
			quizDescription: quizDescription,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		});

		if (!validationResult.success) {
			return fail(400, { errors: validationResult.error.flatten().fieldErrors });
		}

		const durationInSeconds = hours * 3600 + minutes * 60 + seconds;

		// Construct the quiz object
		const quizData = {
			title: quizTitle,
			thumbnail: thumbnail == '' ? 'default_profiles/default_profile' : thumbnail,
			creatorName: quizCreator,
			description: quizDescription,
			durationInSeconds: durationInSeconds
		};

		let res;
		try {
			res = await ApiService.createQuiz(JSON.stringify(quizData));
		} catch (error) {
			return fail(500, { error: error });
		}

		redirect(303, pageRoutes.join.quiz(res.id));
	}
} satisfies Actions;
