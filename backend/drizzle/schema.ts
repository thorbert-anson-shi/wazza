import { pgTable, pgSchema, foreignKey, integer, text, varchar, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const dev = pgSchema("dev");


export const questionInDev = dev.table("question", {
	qno: integer().notNull(),
	content: text().notNull(),
	quizId: varchar({ length: 10 }),
}, (table) => [
	foreignKey({
			columns: [table.quizId],
			foreignColumns: [quizInDev.id],
			name: "question_to_quiz_id"
		}).onDelete("cascade"),
]);

export const quizInDev = dev.table("quiz", {
	id: varchar({ length: 10 }).default('0000000000').primaryKey().notNull(),
	title: varchar({ length: 64 }).notNull(),
	duration: integer(),
	valid: boolean().default(true).notNull(),
});
