import { ReactElement } from "react";
import { ITodo } from "../interfaces";
import { useTodosLogic } from "../hooks";

interface ITodoProps {
  todo: ITodo;
}

export function Todo({ todo }: ITodoProps): ReactElement {
  const { markTodo, removeTodo } = useTodosLogic();

  const computedTodoClasses = todo.done ? "todo done" : "todo";
  const computedDate = new Date(todo.timestamp).toLocaleDateString();

  return (
    <article className={computedTodoClasses}>
      <div className="move-controls">
        <span className="up material-symbols-outlined">arrow_drop_up</span>
        <span className="down material-symbols-outlined">arrow_drop_down</span>
      </div>

      <p className="description">{todo.description}</p>

      <div className="actions">
        <span className="material-symbols-outlined" onClick={() => markTodo(todo.id)}>
          {todo.done ? "check_box" : "check_box_outline_blank"}
        </span>
        <span className="material-symbols-outlined" onClick={() => removeTodo(todo.id)}>
          delete
        </span>
      </div>

      <div className="meta">
        <p className="author"><em>{todo.author}</em></p>
        <p className="timestamp">{computedDate}</p>
      </div>
    </article>
  );
}
