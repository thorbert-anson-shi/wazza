import * as schema from "./db/schema";
import { drizzle } from "drizzle-orm/node-postgres";

export const dbInstance = drizzle(process.env.DATABASE_URL!, { schema });
