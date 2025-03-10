import { Hono } from "hono";
import {
  quizInDev as quizTable,
  quizCategoryInDev as categoryTable,
} from "../../drizzle/schema";
import { eq, like } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { customAlphabet } from "nanoid";

import { dbInstance } from "../data";
import { insertQuizSchema, updateQuizSchema } from "./types";

type Variables = { db: typeof dbInstance };

const app = new Hono<{ Variables: Variables }>();

const quizzesTable = quizTable;
const categoriesTable = categoryTable;

app.use(async (c, next) => {
  c.set("db", dbInstance);
  await next();
});

app.get("/", async (c) => {
  const db = c.get("db");
  const limit = c.req.query("limit");
  const quizzes = await db
    .select()
    .from(quizzesTable)
    .where(eq(quizzesTable.isValid, true))
    .limit(Math.max(Number.parseInt(limit!), 5));
  return c.json(quizzes);
});

app.get("/:id", async (c) => {
  const db = c.get("db");
  const quizId = c.req.param("id");
  const quizDetails = await db
    .select()
    .from(quizzesTable)
    .where(eq(quizzesTable.id, quizId));
  return c.json(quizDetails);
});

app.post("/", zValidator("json", insertQuizSchema), async (c) => {
  const generateID = customAlphabet(
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    10
  );
  const db = c.get("db");
  const validatedData = c.req.valid("json");

  const quizId = generateID();
  validatedData.id = quizId;

  await db.insert(quizzesTable).values(validatedData);

  return c.json(validatedData);
});

app.put("/:id", zValidator("json", updateQuizSchema), async (c) => {
  const db = c.get("db");
  const id = c.req.param("id");
  const validatedData = c.req.valid("json");

  validatedData.lastUpdated = new Date().toISOString();

  const updated = await db
    .update(quizzesTable)
    .set(validatedData)
    .where(eq(quizzesTable.id, id))
    .returning();
  return c.json(updated);
});

app.delete("/:id", async (c) => {
  const db = c.get("db");
  const id = c.req.param("id");

  const deleted = await db
    .update(quizzesTable)
    .set({ isValid: false })
    .where(eq(quizzesTable.id, id))
    .returning();
  return c.json(deleted);
});

app.get("/categories", async (c) => {
  const db = c.get("db");

  const categories = await db.selectDistinct().from(categoriesTable);
  return c.json(categories);
});

export default app;
