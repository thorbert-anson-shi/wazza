import { quizInDev } from "../drizzle/schema";
import { createInsertSchema } from "drizzle-zod";

export type Quiz = typeof quizInDev.$inferInsert;

export const insertQuizSchema = createInsertSchema(quizInDev);

export interface TypedFormData<T extends Record<string, any>> extends FormData {
  get<K extends keyof T>(key: Extract<K, string>): T[K];
}
