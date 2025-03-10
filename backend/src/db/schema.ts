import {
  pgTable,
  pgSchema,
  foreignKey,
  varchar,
  serial,
  unique,
  integer,
  text,
  boolean,
  timestamp,
  json,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { object, string } from "zod";

export const dev = pgSchema("dev");

export const quizCategoryIdSeqInDev = dev.sequence("quizCategory_id_seq", {
  startWith: "1",
  increment: "1",
  minValue: "1",
  maxValue: "2147483647",
  cache: "1",
  cycle: false,
});
export const quizToCategoryCategoryIdSeqInDev = dev.sequence(
  "quizToCategory_categoryId_seq",
  {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
  }
);

export const quizToCategoryInDev = dev.table(
  "quizToCategory",
  {
    quizId: varchar({ length: 10 }).notNull(),
    categoryId: serial().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.quizId],
      foreignColumns: [quizInDev.id],
      name: "quizToCategory_quizId_quiz_id_fk",
    }),
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [quizCategoryInDev.id],
      name: "quizToCategory_categoryId_quizCategory_id_fk",
    }),
  ]
);

export const quizCategoryInDev = dev.table(
  "quizCategory",
  {
    id: serial().primaryKey().notNull(),
    categoryName: varchar({ length: 64 }),
  },
  (table) => [unique("quizCategory_categoryName_unique").on(table.categoryName)]
);

export const quizInDev = dev.table("quiz", {
  id: varchar({ length: 10 }).default("0000000000").primaryKey().notNull(),
  title: varchar({ length: 256 }).notNull(),
  thumbnail: varchar({ length: 64 }),
  durationInSeconds: integer(),
  creatorName: varchar({ length: 256 }).notNull(),
  description: text(),
  answerKey: json(),
  isValid: boolean().default(true).notNull(),
  createdAt: timestamp({ mode: "date" }).defaultNow(),
  lastUpdated: timestamp({ mode: "date" }).defaultNow(),
});
