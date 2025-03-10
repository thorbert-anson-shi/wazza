import { Hono } from "hono";
import { cors } from "hono/cors";
import { trimTrailingSlash } from "hono/trailing-slash";
import quizzes from "./quizzes";
import users from "./users";

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: "*", // List allowed origins
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposeHeaders: ["Content-Length", "X-Content-Length"],
    maxAge: 86400,
  })
);

app.use(trimTrailingSlash());
app.route("/quizzes", quizzes);
app.route("/users", users);

export default {
  port: 8080,
  fetch: app.fetch,
};
