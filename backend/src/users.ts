import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("get users"));
app.get("/:id", (c) => c.text("get user details"));
app.post("/", (c) => c.text("create user"));
app.delete("/:id", (c) => c.text("delete user"));
app.put("/:id", (c) => c.text("edit user"));

export default app;
