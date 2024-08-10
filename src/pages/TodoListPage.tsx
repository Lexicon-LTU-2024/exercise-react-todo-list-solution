import { MouseEventHandler, ReactElement } from "react";
import { useTodosLogic } from "../hooks";
import { Todo } from "../components";
import { Filter } from "../interfaces";

export function TodoListPage(): ReactElement {
  const { sortTodos, todos } = useTodosLogic();

  const handleOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    const classList = target.classList;

    if (classList.contains("author")) sortTodos(Filter.Author);
    if (classList.contains("time")) sortTodos(Filter.Time);
  };

  const renderTodos: ReactElement[] = todos.map((todo, index) => {
    if (index === 0) {
      return <Todo key={todo.id} disableMoveUp todo={todo} />;
    }

    if (index === todos.length - 1) {
      return <Todo key={todo.id} disableMoveDown todo={todo} />;
    }

    return <Todo key={todo.id} todo={todo} />;
  });

  return (
    <main className="todo-list-page">
      <div className="filters" onClick={handleOnClick}>
        <span>Filter by:</span>
        <span className="filter author">Author</span>
        <span className="filter time">Time</span>
      </div>
      {renderTodos}
    </main>
  );
}
