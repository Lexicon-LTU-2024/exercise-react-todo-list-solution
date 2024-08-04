import { ReactElement } from "react";
import { Todo } from ".";
import { useTodosLogic } from "../hooks";

export function TodoList(): ReactElement {
  const { todos } = useTodosLogic();

  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
