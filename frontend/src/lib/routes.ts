export const API_URL = import.meta.env.API_URL;

export const pageRoutes = {
	home: '/home',
	join: {
		byCode: '/join',
		quiz: (id: string) => {
			return `/join/quiz/${id}`;
		}
	},
	quizzes: {
		list: '/quizzes',
		create: '/quizzes/create',
		edit: (id: string) => {
			return `/quizzes/edit/${id}`;
		},
		myQuizzes: '/quizzes/my-quizzes'
	},
	account: '/me'
};
