import { useState } from "react";
import { IOutletContext, ITodo } from "../interfaces";
import { todoList } from "../data";
import { Outlet } from "react-router-dom";

export function App() {
  const [todos, setTodos] = useState<ITodo[]>(todoList);

  const markTodo = (todoId: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id !== todoId ? todo : { ...todo, done: !todo.done }
    );

    setTodos(updatedTodos);
  };

  const removeTodo = (todoId: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const outletContext: IOutletContext = {
    markTodo,
    removeTodo,
    todos,
  };

  return (
    <>
      <h1>My Todo List</h1>
      <Outlet context={outletContext} />
    </>
  );
}
