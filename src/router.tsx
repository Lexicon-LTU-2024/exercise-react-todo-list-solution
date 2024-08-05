import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { AddTodoPage, TodoListPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<TodoListPage />} />
      <Route path="add-todo" element={<AddTodoPage />} />
    </Route>
  )
);
