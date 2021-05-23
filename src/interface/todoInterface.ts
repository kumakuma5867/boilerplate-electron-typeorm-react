import { Todo } from "../entities/todoEntity";
import { TodoService } from "../services/todoService";
import { ipcMain } from "electron";
import { getRepository } from "typeorm";

export function todoInterface() {
  const todoService = new TodoService(getRepository(Todo));

  ipcMain.on("fetchTodo", async (event, arg) => {
    const todos = await todoService.fetchTodo();
    event.reply(todos);
  });

  ipcMain.on("insertTodo", async (event, arg: Todo) => {
    const todo = await todoService.insertTodo(arg);
    event.reply(todo);
  });
}
