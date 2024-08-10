import { TodoState } from "./interfaces";

export function getStateIconName(state: TodoState): string {
  switch (state) {
    case TodoState.Done:
      return "check";
    case TodoState.WaitingForApproval:
      return "hourglass";
    case TodoState.Unfinished:
      return "close";
    case TodoState.InProgress:
      return "progress_activity";
  }
}

export function getStateText(state: TodoState): string {
  switch (state) {
    case TodoState.Done:
      return "done";
    case TodoState.WaitingForApproval:
      return "waiting for approval";
    case TodoState.Unfinished:
      return "unfinished";
    case TodoState.InProgress:
      return "in progress";
  }
}
