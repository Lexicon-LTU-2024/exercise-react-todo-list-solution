import { ITodoContext } from "../interfaces";
import { useContext } from "react";
import { TodoContext } from "../context";

export function useTodosLogic(): ITodoContext {
  return useContext(TodoContext);
}
