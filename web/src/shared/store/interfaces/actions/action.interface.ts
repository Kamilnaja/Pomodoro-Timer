import { Action } from "redux";

export interface ActionWithPayload<T, U> extends Action<T> {
  payload?: U;
}
