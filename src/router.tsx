import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App, TodoList } from "./components";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route index element={<TodoList/>} />
  </Route>
))