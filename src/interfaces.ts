export enum Direction {
  Up = "up",
  Down = "down",
}

export enum TodoState {
  Done = "done",
  Idle = "idle",
  WaitingForApproval = "waiting",
  InProgress = "in-progress",
}
export interface ITodoContext {
  addTodo: (newTodo: ITodo) => void;
  moveTodo: (todo: ITodo, direction: Direction) => void;
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
