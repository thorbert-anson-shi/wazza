export type QuizDetails = QuizData & QuizMetadata;

export interface QuizData {
	id: string;
	thumbnail?: string;
	title: string;
	creatorName: string;
	description: string;
	durationInSeconds: number;
}

export interface QuizMetadata {
	isValid: boolean;
	createdAt: string;
	lastUpdated: string;
}
