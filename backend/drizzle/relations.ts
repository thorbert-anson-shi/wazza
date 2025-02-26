import { relations } from "drizzle-orm/relations";
import { questionInDev, quizInDev } from "./schema";

export const questionInDevRelations = relations(questionInDev, ({ one }) => ({
  quizInDev: one(quizInDev, {
    fields: [questionInDev.quizId],
    references: [quizInDev.id],
  }),
}));

export const quizInDevRelations = relations(quizInDev, ({ many }) => ({
  questionInDevs: many(questionInDev),
}));
