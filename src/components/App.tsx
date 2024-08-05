import { useState } from "react";
import { IOutletContext, ITodo } from "../interfaces";
import { todoList } from "../data";
import { Outlet } from "react-router-dom";

export function App() {
  const [todos, setTodos] = useState<ITodo[]>(todoList);

  const addTodo = (newTodo: ITodo) => {
    setTodos([newTodo, ...todos]);
  };

  const markTodo = (todoId: string) => {
    setTodos(todos.map((todo) => (todo.id !== todoId ? todo : { ...todo, done: !todo.done })));
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const outletContext: IOutletContext = {
    addTodo,
    markTodo,
    removeTodo,
    todos,
  };

  return (
    <main>
      <Outlet context={outletContext} />
    </main>
  );
}
