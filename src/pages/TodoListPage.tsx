import { ReactElement } from "react";
import { useTodosLogic } from "../hooks";
import { Todo } from "../components";

export function TodoListPage(): ReactElement {
  const { todos } = useTodosLogic();

  const renderTodos: ReactElement[] = todos.map((todo, index) => {
    if (index === 0) {
      return <Todo key={todo.id} disableMoveUp todo={todo} />;
    }

    if (index === todos.length - 1) {
      return <Todo key={todo.id} disableMoveDown todo={todo} />;
    }

    return <Todo key={todo.id} todo={todo} />;
  });

  return <main className="todo-list-page">{renderTodos}</main>;
}
