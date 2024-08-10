import { createContext, ReactElement, ReactNode, useState } from "react";
import { Direction, Filter, ITodo, ITodoContext } from "../interfaces";
import { states, todosDummyData } from "../data";

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export function TodoProvider({ children }: ITodoProviderProps): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>(todosDummyData);

  const addTodo = (newTodo: ITodo) => setTodos([newTodo, ...todos]);

  const moveTodo = (todo: ITodo, direction: Direction) => {
    const array = [...todos];
    const i = todos.indexOf(todo);
    const temp = array[i];

    switch (direction) {
      case Direction.Down:
        array[i] = array[i + 1];
        array[i + 1] = temp;
        return setTodos(array);
      case Direction.Up:
        array[i] = array[i - 1];
        array[i - 1] = temp;
        return setTodos(array);
    }
  };

  const removeTodo = (todoId: string) => setTodos(todos.filter((todo) => todo.id !== todoId));

  const sortTodos = (filter: Filter) => {
    const tempTodos = [...todos];

    if (filter === Filter.Author)
      return setTodos(tempTodos.sort((a, b) => a.author.localeCompare(b.author)));
    if (filter === Filter.Time)
      return setTodos(tempTodos.sort((a, b) => a.timestamp - b.timestamp));
  };

  const updateState = (todoToUpdate: ITodo) => {
    const currentIndex = states.indexOf(todoToUpdate.state);
    const nextIndex = currentIndex === states.length - 1 ? 0 : currentIndex + 1;

    setTodos(
      todos.map((todo) =>
        todo.id === todoToUpdate.id ? { ...todo, state: states[nextIndex] } : todo
      )
    );
  };

  const values: ITodoContext = {
    addTodo,
    moveTodo,
    removeTodo,
    sortTodos,
    todos,
    updateState,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
