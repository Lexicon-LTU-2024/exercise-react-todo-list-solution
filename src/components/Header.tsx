import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <header className="header container">
      <p className="logo">The Family Todo List</p>
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/add-todo">
          Add{" "}
        </Link>
      </nav>
    </header>
  );
}
