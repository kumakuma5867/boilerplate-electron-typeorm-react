import { createConnection } from "typeorm";
import { Todo } from "./entities/todoEntity";

export const bootstrap = async () => {
  await createConnection({
    type: "sqlite",
    database: "./db.sqlite3",
    entities: [Todo],
    logging: true,
  });
};
