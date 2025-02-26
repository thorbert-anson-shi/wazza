import { Hono } from "hono";
import { db } from "./data";
import { quizInDev } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { insertQuizSchema } from "./types";
import { zValidator } from "@hono/zod-validator";
import { customAlphabet } from "nanoid";

type Variables = { db: typeof db };

const app = new Hono<{ Variables: Variables }>();

app.use(async (c, next) => {
    c.set("db", db);
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
    const quizDetails = await db.select().from(quizInDev).where(
        eq(quizInDev.id, quizId),
    );
    return c.json(quizDetails);
});

app.post("/", zValidator("json", insertQuizSchema), async (c) => {
    const generateID = customAlphabet(
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        10,
    );
    const db = c.get("db");
    const validatedData = c.req.valid("json");
    const quizId = generateID(10);
    validatedData.id = quizId;

    await db.insert(quizInDev).values(validatedData);

    return c.json(validatedData);
});

app.put("/:id", (c) => c.text("edit quiz"));
app.post("/:id", (c) => c.text("soft delete quiz"));

export default app;
