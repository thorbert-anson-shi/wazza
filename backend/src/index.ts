import { Hono } from "hono";
import { appendTrailingSlash, trimTrailingSlash } from "hono/trailing-slash";
import quizzes from "./quizzes";
import users from "./users";

const app = new Hono();

app.use(appendTrailingSlash());
app.use(trimTrailingSlash());
app.route("/quizzes", quizzes);
app.route("/users", users);

export default {
  port: 8080,
  fetch: app.fetch,
};
