import { v4 as uuid } from "uuid";
import { ITodo } from "./interfaces";

export const todoList: ITodo[] = [
  {
    author: "Niklas",
    id: uuid(),
    description: "Buy candy",
    done: true,
    timestamp: new Date("2024-08-02").getTime(),
  },
  {
    author: "Niklas",
    id: uuid(),
    description: "Do laundry",
    done: false,
    timestamp: new Date("2024-08-01").getTime(),
  },
  {
    author: "Niklas",
    id: uuid(),
    description: "Buy potatoes",
    done: false,
    timestamp: new Date("2024-08-03").getTime(),
  },
];
