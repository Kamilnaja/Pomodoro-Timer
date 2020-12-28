import {
  savePomodoro,
  savePomodoroError,
  savePomodoroSuccess,
} from "../actions/actions";
// todo - different versions for prod etc
const API_URL = "http://localhost:8080/api";

const makePostRequest = () =>
  fetch(API_URL + "/pomodoros", {
    method: "POST",
  });

export const handleErrors = (response: any): Promise<any> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const savePomodoroThunk = () => (dispatch: Function) => {
  dispatch(savePomodoro());

  return makePostRequest()
    .then(handleErrors)
    .then(() => dispatch(savePomodoroSuccess()))
    .catch((error) => dispatch(savePomodoroError(error)));
};
