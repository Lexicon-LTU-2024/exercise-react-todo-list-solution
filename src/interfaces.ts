export enum Direction {
  Up = "up",
  Down = "down",
}

export enum Filter {
  Author = "author",
  Time = "time",
}

export enum TodoState {
  Done = "done",
  Unfinished = "unfinished",
  WaitingForApproval = "waiting",
  InProgress = "in-progress",
}

interface IIndexable {
  [key: string]: any;
}

export interface ITodoContext {
  addTodo: (newTodo: ITodo) => void;
  moveTodo: (todo: ITodo, direction: Direction) => void;
  removeTodo: (todoId: string) => void;
  sortTodos: (filter: Filter) => void;
  updateStateOfTodo: (todoToUpdate: ITodo) => void;
  todos: ITodo[];
}

export interface ITodo extends IIndexable {
  author: string;
  id: string;
  description: string;
  state: TodoState;
  timestamp: number;
}
