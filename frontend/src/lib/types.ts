export interface QuizDetails {
	id: string;
	thumbnail: string;
	title: string;
	creatorName: string;
	description: string;
	categories: string[];
	durationInSeconds: number;
	createdAt: Date;
	lastUpdated: Date;
}
