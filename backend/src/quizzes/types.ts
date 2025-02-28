import { quizInDev } from "../../drizzle/schema";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";

export const insertQuizSchema = createInsertSchema(quizInDev);
export const updateQuizSchema = createUpdateSchema(quizInDev).omit({
  id: true,
});
