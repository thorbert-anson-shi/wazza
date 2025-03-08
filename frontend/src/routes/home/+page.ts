import { ApiService } from '$lib/apiService';
import type { QuizDetails } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	// I wanna return promises which contain the quizData for each grouping (recommended, popoular, etc)
	let quizzes = await ApiService.getQuizzes();
	console.log(quizzes);

	return {
		quizzes: Promise.all([
			new Promise<QuizDetails[]>((resolve, reject) =>
				resolve(quizzes.filter((quiz) => quiz.title.startsWith('J')) as QuizDetails[])
			),
			new Promise<QuizDetails[]>((resolve, reject) =>
				resolve(quizzes.filter((quiz) => quiz.title.length > 16) as QuizDetails[])
			),
			new Promise<QuizDetails[]>((resolve, reject) =>
				resolve(quizzes.filter((quiz) => quiz.title.startsWith('I')) as QuizDetails[])
			)
		]).then(([recommended, popular, communityFavorites]) => ({
			recommended,
			popular,
			communityFavorites
		}))
	};
};
