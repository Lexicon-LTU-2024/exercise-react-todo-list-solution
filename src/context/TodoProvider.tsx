import { createContext, ReactElement, ReactNode, useState } from "react";
import { ITodo, ITodoContext } from "../interfaces";
import { stateOrder, todosDummyData } from "../data";

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export function TodoProvider({ children }: ITodoProviderProps): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>(todosDummyData);

  console.log(todos);

  const addTodo = (newTodo: ITodo) => {
    setTodos([newTodo, ...todos]);
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const updateState = (todoToUpdate: ITodo) => {
    const indexOfCurrentState = stateOrder.indexOf(todoToUpdate.state);
    const indexOfNextState =
      indexOfCurrentState === stateOrder.length - 1 ? 0 : indexOfCurrentState + 1;

    setTodos(
      todos.map((todo) =>
        todo.id === todoToUpdate.id ? { ...todo, state: stateOrder[indexOfNextState] } : todo
      )
    );
  };

  const values: ITodoContext = { addTodo, removeTodo, updateState, todos };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
