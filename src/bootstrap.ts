import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Todo } from "./entities/todoEntity";
import { Container } from "typeorm-typedi-extensions";
import { todoInterface } from "./interface";

useContainer(Container);

export const bootstrap = async () => {
  await createConnection({
    type: "sqlite",
    database: "./db.sqlite3",
    entities: [Todo],
    logging: true,
  });

  /*** ipcMain ***/
  todoInterface();
};
