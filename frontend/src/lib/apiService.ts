import type { QuizDetails } from './types';

const API_BASE_URL = `${import.meta.env.VITE_API_URL!}`;

export class ApiService {
	static async getQuizzes(limit: number): Promise<QuizDetails[]> {
		const response = await fetch(`${API_BASE_URL}/quizzes?limit=${limit}`);
		if (!response.ok) throw new Error('Failed to fetch quizzes');
		return response.json();
	}

	static async getQuizById(id: string): Promise<QuizDetails[]> {
		const response = await fetch(`${API_BASE_URL}/quizzes/${id}`);
		if (!response.ok) throw new Error('Failed to fetch quiz');
		let json = await response.json();
		return json;
	}

	static async createQuiz(quizData: string) {
		const response = await fetch(`${API_BASE_URL}/quizzes`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: quizData
		});
		if (!response.ok) throw new Error('Failed to create quiz');
		return response.json();
	}

	static async updateQuiz(id: string, quizData: string) {
		const response = await fetch(`${API_BASE_URL}/quizzes/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: quizData
		});
		if (!response.ok) throw new Error('Failed to update quiz');
		return response.json();
	}

	static async deleteQuiz(id: string) {
		const response = await fetch(`${API_BASE_URL}/${id}`, {
			method: 'DELETE'
		});
		if (!response.ok) throw new Error('Failed to delete quiz');
		return response.json();
	}

	static async getCategories() {
		const response = await fetch(`${API_BASE_URL}/quizzes/categories`);
		if (!response.ok) throw new Error('Failed to fetch categories');
		return response.json();
	}
}
