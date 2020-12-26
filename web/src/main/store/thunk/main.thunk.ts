import {
  getPomodoros,
  getPomodorosError,
  getPomodorosSuccess,
  savePomodoro,
  savePomodoroError,
  savePomodoroSuccess,
} from "../actions/actions";
// todo - different versions for prod etc
const API_URL = "http://localhost:8080/pomodoros";

function makePostRequest() {
  return fetch(API_URL, {
    method: "POST",
  });
}

export function makeGetRequest() {
  return fetch(API_URL);
}

function handleErrors(response: any): Promise<any> {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function savePomodoroThunk() {
  return (dispatch: Function) => {
    dispatch(savePomodoro());

    return makePostRequest()
      .then(handleErrors)
      .then(() => dispatch(savePomodoroSuccess()))
      .catch((error) => dispatch(savePomodoroError(error)));
  };
}

export function getPomodorosThunk() {
  return (dispatch: Function) => {
    dispatch(getPomodoros());

    return makeGetRequest()
      .then(handleErrors)
      .then(() => dispatch(getPomodorosSuccess()))
      .catch((error) => dispatch(getPomodorosError(error)));
  };
}
