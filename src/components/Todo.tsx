import { ReactElement } from "react";
import { ITodo, TodoState } from "../interfaces";
import { useTodosLogic } from "../hooks";

interface ITodoProps {
  todo: ITodo;
}

export function Todo({ todo }: ITodoProps): ReactElement {
  const { removeTodo, updateState } = useTodosLogic();

  // const computedDate = new Date(todo.timestamp).toLocaleDateString();

  const renderStateIconName = (): string => {
    switch (todo.state) {
      case TodoState.Done:
        return "check";
      case TodoState.WaitingForApproval:
        return "hourglass";
      case TodoState.Idle:
        return "close";
      case TodoState.InProgress:
        return "progress_activity";
    }
  };

  const renderStateText = (): string => {
    switch (todo.state) {
      case TodoState.Done:
        return "done";
      case TodoState.WaitingForApproval:
        return "waiting for approval";
      case TodoState.Idle:
        return "unfinished";
      case TodoState.InProgress:
        return "in progress";
    }
  };

  return (
    <article className={`todo ${todo.state}`}>
      <span className="icon material-symbols-outlined" onClick={() => updateState(todo)}>
        {renderStateIconName()}
      </span>
      <p className="description">
        {todo.description} <em className="state-text">{`...${renderStateText()}`}</em>
      </p>
      <span className="icon delete material-symbols-outlined" onClick={() => removeTodo(todo.id)}>
        delete
      </span>
    </article>
  );
}
