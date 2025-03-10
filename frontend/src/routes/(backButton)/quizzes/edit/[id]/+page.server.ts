import { fail, type Actions } from '@sveltejs/kit';
import { ApiService } from '$lib/apiService';
import { z } from 'zod';

const quizDataSchema = z.object({
	quizTitle: z.string().max(256).min(0),
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
		const quizDescription = data.get('quizDescription') as string;

		const hours = Number(data.get('hours')) || 0;
		const minutes = Number(data.get('minutes')) || 0;
		const seconds = Number(data.get('seconds')) || 0;

		const thumbnail = data.get('quizThumbnail') as string;

		// Handling multiple checkboxes for categories
		const categories = data.getAll('categories') as string[]; // Gets all selected categories

		let validationResult = quizDataSchema.safeParse({
			quizTitle: quizTitle,
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
			thumbnail: thumbnail,
			description: quizDescription,
			durationInSeconds: durationInSeconds
		};

		const quizId = data.get('quizId') as string;

		try {
			let res = await ApiService.updateQuiz(quizId, JSON.stringify(quizData));
		} catch (error) {
			return fail(500, { error: error });
		}

		return { success: true };
	}
} satisfies Actions;
