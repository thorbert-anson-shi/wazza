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
		myQuizzes: '/quizzes/my-quizzes'
	},
	account: '/me'
};
