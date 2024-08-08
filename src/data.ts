import { v4 as uuid } from "uuid";
import { ITodo, TodoState } from "./interfaces";

export const stateOrder: TodoState[] = [
  TodoState.Idle,
  TodoState.InProgress,
  TodoState.WaitingForApproval,
  TodoState.Done,
];

export const todosDummyData: ITodo[] = [
  {
    author: "niklas",
    id: uuid(),
    description: "Buy candy",
    state: TodoState.Idle,
    timestamp: new Date("2024-08-02").getTime(),
  },
  {
    author: "niklas",
    id: uuid(),
    description: "Do laundry",
    state: TodoState.Done,
    timestamp: new Date("2024-08-01").getTime(),
  },
  {
    author: "maria",
    id: uuid(),
    description: "Buy potatoes",
    state: TodoState.InProgress,
    timestamp: new Date("2024-08-03").getTime(),
  },
  {
    author: "niklas",
    id: uuid(),
    description: "Eat",
    state: TodoState.WaitingForApproval,
    timestamp: new Date("2024-08-05").getTime(),
  },
];
