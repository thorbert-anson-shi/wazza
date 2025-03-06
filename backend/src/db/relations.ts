import { relations } from "drizzle-orm/relations";
import { quizInDev, quizToCategoryInDev, quizCategoryInDev, questionInDev } from "./schema";

export const quizToCategoryInDevRelations = relations(quizToCategoryInDev, ({one}) => ({
	quizInDev: one(quizInDev, {
		fields: [quizToCategoryInDev.quizId],
		references: [quizInDev.id]
	}),
	quizCategoryInDev: one(quizCategoryInDev, {
		fields: [quizToCategoryInDev.categoryId],
		references: [quizCategoryInDev.id]
	}),
}));

export const quizInDevRelations = relations(quizInDev, ({many}) => ({
	quizToCategoryInDevs: many(quizToCategoryInDev),
	questionInDevs: many(questionInDev),
}));

export const quizCategoryInDevRelations = relations(quizCategoryInDev, ({many}) => ({
	quizToCategoryInDevs: many(quizToCategoryInDev),
}));

export const questionInDevRelations = relations(questionInDev, ({one}) => ({
	quizInDev: one(quizInDev, {
		fields: [questionInDev.quizId],
		references: [quizInDev.id]
	}),
}));