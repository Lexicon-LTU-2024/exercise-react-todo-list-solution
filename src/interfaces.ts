export enum TodoState {
  Done = "done",
  Idle = "idle",
  WaitingForApproval = "waiting",
  InProgress = "in-progress",
}
export interface ITodoContext {
  addTodo: (newTodo: ITodo) => void;
  removeTodo: (todoId: string) => void;
  updateState: (todoToUpdate: ITodo) => void;
  todos: ITodo[];
}

export interface ITodo {
  author: string;
  id: string;
  description: string;
  state: TodoState;
  timestamp: number;
}
