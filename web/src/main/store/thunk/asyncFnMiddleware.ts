// todo - rename this shame
import {
  savePomodoro,
  savePomodoroError,
  savePomodoroSuccess,
} from "../actions/actions";

const API_URL = "/pomodoros/";

export function fetchStats(dispatch: any) {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => dispatch({ type: "todos/todosLoaded", payload: data }));
}

function fetchPomodoros() {
  return fetch(API_URL, {
    method: "POST",
  });
}

function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function savePomodoroThunk() {
  return (dispatch: Function) => {
    dispatch(savePomodoro());
    return fetchPomodoros()
      .then(handleErrors)
      .then(() => dispatch(savePomodoroSuccess()))
      .catch((error) => dispatch(savePomodoroError(error)));
  };
}
