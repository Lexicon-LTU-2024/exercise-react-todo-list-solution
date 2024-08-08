import { Outlet } from "react-router-dom";
import { TodoProvider } from "../context";
import { Header } from "./Header";

export function App() {
  return (
    <>
      <Header />
      <TodoProvider>
        <Outlet />
      </TodoProvider>
    </>
  );
}
