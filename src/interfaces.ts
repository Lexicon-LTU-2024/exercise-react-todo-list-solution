export interface IOutletContext {
  markTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
  todos: ITodo[];
}

export interface ITodo {
  id: string;
  content: string;
  done: boolean;
}
