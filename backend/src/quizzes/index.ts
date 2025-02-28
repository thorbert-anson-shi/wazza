import { Hono } from "hono";
import { quizInDev } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { customAlphabet } from "nanoid";

import { dbInstance } from "../data";
import { insertQuizSchema, updateQuizSchema } from "./types";

type Variables = { db: typeof dbInstance };

const app = new Hono<{ Variables: Variables }>();

app.use(async (c, next) => {
  c.set("db", dbInstance);
  await next();
});

app.get("/", async (c) => {
  const db = c.get("db");
  const quizzes = await db.query.quizInDev.findMany();
  return c.json(quizzes);
});

app.get("/:id", async (c) => {
  const db = c.get("db");
  const quizId = c.req.param("id");
  const quizDetails = await db
    .select()
    .from(quizInDev)
    .where(eq(quizInDev.id, quizId));
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

  await db.insert(quizInDev).values(validatedData);

  return c.json(validatedData);
});

app.put("/:id", zValidator("json", updateQuizSchema), async (c) => {
  const db = c.get("db");
  const id = c.req.param("id");
  const validatedData = c.req.valid("json");

  const updated = await db
    .update(quizInDev)
    .set(validatedData)
    .where(eq(quizInDev.id, id))
    .returning();
  return c.json(updated);
});

app.delete("/:id", async (c) => {
  const db = c.get("db");
  const id = c.req.param("id");

  const deleted = await db
    .update(quizInDev)
    .set({ valid: false })
    .where(eq(quizInDev.id, id))
    .returning();
  return c.json(deleted);
});

export default app;
