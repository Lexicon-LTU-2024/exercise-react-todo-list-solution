import { useOutletContext } from "react-router-dom";
import { IOutletContext } from "../interfaces";

export function useTodosLogic(): IOutletContext {
  return useOutletContext<IOutletContext>();
}
