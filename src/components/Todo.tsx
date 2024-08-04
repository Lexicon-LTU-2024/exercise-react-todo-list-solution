import { ReactElement } from "react";
import { ITodo } from "../interfaces";
import { useTodosLogic } from "../hooks";

interface ITodoProps {
  todo: ITodo;
}

export function Todo({ todo }: ITodoProps): ReactElement {
  const { markTodo, removeTodo } = useTodosLogic();

  const derivedClasses = todo.done ? "todo done" : "todo";

  return (
    <article className={derivedClasses}>
      <p className="content">{todo.content}</p>
      <div className="actions">
        <span className="mark-todo material-symbols-outlined" onClick={() => markTodo(todo.id)}>
          {todo.done ? "check_box" : "check_box_outline_blank"}
        </span>
        <span className="material-symbols-outlined" onClick={() => removeTodo(todo.id)}>
          delete
        </span>
      </div>
    </article>
  );
}
