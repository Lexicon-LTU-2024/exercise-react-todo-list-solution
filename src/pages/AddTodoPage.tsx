import { FormEventHandler, ReactElement, useState } from "react";
import { v4 as uuid } from "uuid";
import { ITodo, TodoState } from "../interfaces";
import { useTodosLogic } from "../hooks";
import { useNavigate } from "react-router-dom";

export function AddTodoPage(): ReactElement {
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const { addTodo } = useTodosLogic();
  const navigate = useNavigate();

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newTodo: ITodo = {
      author: author.toLowerCase(),
      description: content,
      id: uuid(),
      state: TodoState.Unfinished,
      timestamp: Date.now(),
    };

    addTodo(newTodo);
    navigate("/");
  };

  return (
    <form className="add-todo-page" onSubmit={handleOnSubmit}>
      <fieldset className="input-wrapper">
        <input
          className="input"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          type="text"
          value={content}
        />
      </fieldset>
      <fieldset className="input-wrapper">
        <input
          className="input"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
          type="text"
          value={author}
        />
      </fieldset>
      <div className="actions">
        <button className="btn back" onClick={() => navigate("/")} type="button">
          Back
        </button>
        <button className="btn add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
