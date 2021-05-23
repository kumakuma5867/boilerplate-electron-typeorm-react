import { Todo } from "../entities/todoEntity";
import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>
  ) {}

  /**
   * Fetch all todo.
   * @returns
   */
  async fetchTodo() {
    return await this.todoRepo.find();
  }

  /**
   * Insert new todo.
   * @param input
   * @returns
   */
  async insertTodo(input: Todo) {
    return this.todoRepo.save(this.todoRepo.create(input));
  }

  /**
   * Update todo.
   * @param input
   * @returns
   */
  async updateTodo(input: Todo) {
    const toUpdate = await this.todoRepo.findOneOrFail(input.id);
    toUpdate.name = input.name;
    toUpdate.status = input.status;
    toUpdate.estimate = input.estimate;
    toUpdate.actual = input.actual;
    return this.todoRepo.save(toUpdate);
  }

  async softDeleteTodo(todoId: number) {
    return this.todoRepo.softDelete(todoId);
  }

  async hardDeleteTodo(todoId: number) {
    return this.todoRepo.delete(todoId);
  }
}
