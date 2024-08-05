export interface IOutletContext {
  addTodo: (newTodo: ITodo) => void;
  markTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
  todos: ITodo[];
}

export interface ITodo {
  author: string;
  id: string;
  description: string;
  done: boolean;
  timestamp: number;
}
