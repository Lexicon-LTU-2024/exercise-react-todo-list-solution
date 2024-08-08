import { ReactElement } from "react";
import { useTodosLogic } from "../hooks";
import { Todo } from "../components";

export function TodoListPage(): ReactElement {
  const { todos } = useTodosLogic();

  return (
    <>
      <main className="todo-list-page">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </main>
    </>
  );
}
