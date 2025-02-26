import "dotenv/config";
import { pgSchema } from "drizzle-orm/pg-core";
import { defineConfig } from "drizzle-kit";

export const customSchema = pgSchema("dev");

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schemaFilter: ["dev"],
});
