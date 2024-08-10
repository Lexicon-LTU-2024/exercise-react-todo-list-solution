import { MouseEventHandler, ReactElement } from "react";
import { Direction, ITodo } from "../interfaces";
import { useTodosLogic } from "../hooks";
import { getStateIconName, getStateText } from "../utilites";

interface ITodoProps {
  disableMoveDown?: true;
  disableMoveUp?: true;
  todo: ITodo;
}

export function Todo({ disableMoveDown, disableMoveUp, todo }: ITodoProps): ReactElement {
  const { moveTodo, removeTodo, updateState } = useTodosLogic();

  const handleOnClick: MouseEventHandler<HTMLElement> = (e): void => {
    const target = e.target as HTMLElement;
    const classList = target.classList;

    if (classList.contains("move-up")) return moveTodo(todo, Direction.Up);
    if (classList.contains("move-down")) return moveTodo(todo, Direction.Down);
    if (classList.contains("delete")) return removeTodo(todo.id);

    updateState(todo);
  };

  return (
    <article className={`todo ${todo.state}`} onClick={handleOnClick}>
      <span className="icon update-state material-symbols-outlined">
        {getStateIconName(todo.state)}
      </span>
      <p className="description">
        {todo.description} <em className="state-text">{`...${getStateText(todo.state)}`}</em>
      </p>
      {!disableMoveUp && (
        <span className="icon move-up material-symbols-outlined">arrow_upward</span>
      )}
      {!disableMoveDown && (
        <span className="icon move-down material-symbols-outlined">arrow_downward</span>
      )}
      <span className="icon delete material-symbols-outlined">delete</span>
      <p className="author">
        <em>{todo.author}</em>
      </p>
      <p className="timestamp">
        <em>{new Date(todo.timestamp).toLocaleDateString()}</em>
      </p>
    </article>
  );
}
