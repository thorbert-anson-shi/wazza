import { quizInDev } from "../../drizzle/schema";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";

export const insertQuizSchema = createInsertSchema(quizInDev).omit({
  isValid: true,
});

export const updateQuizSchema = createUpdateSchema(quizInDev).omit({
  id: true,
  isValid: true,
  creatorName: true,
  createdAt: true,
});
