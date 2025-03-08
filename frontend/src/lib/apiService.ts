import type { QuizData } from './types';

const API_BASE_URL = `${import.meta.env.VITE_API_URL!}/quizzes`;
const API_KEY = import.meta.env.VITE_API_KEY;

export class ApiService {
	static async getQuizzes() {
		const response = await fetch(`${API_BASE_URL}/`, {
			headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' }
		});
		console.log(await response.text());
		if (!response.ok) throw new Error('Failed to fetch quizzes');
		return response.json();
	}

	static async getQuizById(id: string) {
		const response = await fetch(`${API_BASE_URL}/${id}`);
		if (!response.ok) throw new Error('Failed to fetch quiz');
		return response.json();
	}

	static async createQuiz(quizData: string) {
		const response = await fetch(`${API_BASE_URL}/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: quizData
		});
		if (!response.ok) throw new Error('Failed to create quiz');
		return response.json();
	}

	static async updateQuiz(id: string, quizData: string) {
		const response = await fetch(`${API_BASE_URL}/${id}`, {
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
}
