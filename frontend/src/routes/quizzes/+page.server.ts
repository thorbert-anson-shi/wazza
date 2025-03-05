import type { Actions } from '@sveltejs/kit';

export const actions = {
	create: async (event) => {
		const data = await event.fetch('api/quizzes/create', {
			method: 'POST',
			body: convertFormDataToJSON(await event.request.formData())
		});

		console.log(await data.json());
	},
	edit: async (event) => {
		const data = await event.fetch('api/quizzes/edit', {
			method: 'PUT',
			body: convertFormDataToJSON(await event.request.formData())
		});

		console.log(await data.json());
	}
} satisfies Actions;

function convertFormDataToJSON(formData: FormData): string {
	const formObj = Object.fromEntries(formData.entries());
	return JSON.stringify(formObj);
}
