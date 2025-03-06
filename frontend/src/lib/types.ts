export type QuizDetails = QuizData & QuizMetadata;

export interface QuizData {
	id: string;
	thumbnail: string;
	title: string;
	creatorName: string;
	description: string;
	categories: string[];
	durationInSeconds: number;
}

export interface QuizMetadata {
	createdAt: Date;
	lastUpdated: Date;
}
