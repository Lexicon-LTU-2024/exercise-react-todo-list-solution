import { ReactElement } from "react";
import { useTodosLogic } from "../hooks";
import { Todo } from "../components";

export function TodoListPage(): ReactElement {
  const { todos } = useTodosLogic();

  return (
    <>
      <h1>My Todo List</h1>
      <section className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </section>
    </>
  );
}
