import { Action } from "redux";

export interface ActionWithPayload<T, U = void> extends Action<T> {
  payload?: U;
}
