import { ApiService } from '$lib/apiService';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	// I wanna return promises which contain the quizData for each grouping (recommended, popoular, etc)
	return { quizzes: ApiService.getQuizzes(12), quizzesRec: ApiService.getQuizzes(6) };
};
