import { FormEventHandler, ReactElement, useState } from "react";
import { v4 as uuid } from "uuid";
import { ITodo } from "../interfaces";
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
      author,
      description: content,
      done: false,
      id: uuid(),
      timestamp: Date.now(),
    };

    addTodo(newTodo);
    navigate("/", { replace: true });
  };

  return (
    <>
      <h1>Add new Todo</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          className="input"
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Content"
          value={content}
        />
        <input
          className="input"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author"
          value={author}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </>
  );
}
