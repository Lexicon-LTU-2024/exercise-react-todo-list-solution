import {
  FormEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Direction, ITodo } from "../interfaces";
import { useTodosLogic } from "../hooks";
import { getStateIconName, getStateText } from "../utilites";

interface ITodoProps {
  disableMoveDown?: true;
  disableMoveUp?: true;
  todo: ITodo;
}

export function Todo({ disableMoveDown, disableMoveUp, todo }: ITodoProps): ReactElement {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(todo.description);
  const { moveTodo, removeTodo, updateStateOfTodo, updateTodo } = useTodosLogic();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSubmitRef = useRef<HTMLInputElement>(null);

  const handleOnBlur = () => {
    setTimeout(() => {
      isEditing === true && setIsEditing(false);
      console.log("1000ms has passed, onBlur runs");
    }, 1000);
  };

  const handleOnClick: MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement;

    if (target.id === "move-up") return moveTodo(todo, Direction.Up);
    if (target.id === "move-down") return moveTodo(todo, Direction.Down);
    if (target.id === "delete") return removeTodo(todo.id);
    if (target.id === "update-state") return updateStateOfTodo(todo);
    if (target.id === "edit") return handleOnEditClick();
  };

  // Using function kew word here in order for it to be "hoisted", but still want to keep my functions in alphabetical order.
  function handleOnEditClick(): void {
    const hasValueBeenUpdated: boolean = inputValue !== todo.description;

    if (isEditing && hasValueBeenUpdated) {
      formRef.current?.requestSubmit(inputSubmitRef.current);
    }

    setIsEditing((prev) => !prev);
  }

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const updatedTodo: ITodo = { ...todo, description: inputValue };
    updateTodo(updatedTodo);
  };

  const renderDescription = (): ReactElement => {
    if (isEditing) {
      return (
        <form onSubmit={handleOnSubmit} ref={formRef}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleOnBlur}
            ref={inputRef}
            type="text"
            value={inputValue}
          />
          <input hidden ref={inputSubmitRef} type="submit" />
        </form>
      );
    }

    return (
      <p className="description">
        {todo.description} <em className="state-text">{`...${getStateText(todo.state)}`}</em>
      </p>
    );
  };

  const renderMoveUpIcon = (): ReactNode =>
    !disableMoveUp && (
      <span className="icon move-up material-symbols-outlined" id="move-up">
        arrow_upward
      </span>
    );

  const renderMoveDownIcon = (): ReactNode =>
    !disableMoveDown && (
      <span className="icon move-down material-symbols-outlined" id="move-down">
        arrow_downward
      </span>
    );

  useEffect(() => {
    if (isEditing === true) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <article className={`todo ${todo.state}`} onClick={handleOnClick}>
      <span className="icon update-state material-symbols-outlined" id="update-state">
        {getStateIconName(todo.state)}
      </span>
      {renderDescription()}
      <span className="icon edit material-symbols-outlined" id="edit">
        edit
      </span>
      {renderMoveUpIcon()}
      {renderMoveDownIcon()}
      <span className="icon delete material-symbols-outlined" id="delete">
        delete
      </span>
      <p className="author">
        <em>{todo.author}</em>
      </p>
      <p className="timestamp">
        <em>{new Date(todo.timestamp).toLocaleDateString()}</em>
      </p>
    </article>
  );
}
