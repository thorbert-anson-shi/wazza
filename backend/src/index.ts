import { Hono } from "hono";
import { cors } from "hono/cors";
import { appendTrailingSlash, trimTrailingSlash } from "hono/trailing-slash";
import quizzes from "./quizzes";
import users from "./users";

const app = new Hono();

// Enable CORS
app.use(
  cors({
    origin: "*", // Allow all origins (change to your frontend URL in production)
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", (c) => {
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
  c.header("Access-Control-Allow-Credentials", "true");
  return c.text("OK");
});

app.use(appendTrailingSlash());
app.use(trimTrailingSlash());
app.route("/quizzes", quizzes);
app.route("/users", users);

export default {
  port: 8080,
  fetch: app.fetch,
};
