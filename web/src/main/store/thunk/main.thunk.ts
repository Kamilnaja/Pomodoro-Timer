import TodayStatistics from "../../../shared/store/interfaces/todayStatistics.interface";
import {
  getTodayStatistics,
  getTodayStatisticsError,
  getTodayStatisticsSuccess,
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
  return response.json();
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
    dispatch(getTodayStatistics());

    return makeGetRequest()
      .then(handleErrors)
      .then((payload: TodayStatistics) => {
        console.log(payload);
        return dispatch(getTodayStatisticsSuccess(payload));
      })
      .catch((error) => dispatch(getTodayStatisticsError(error)));
  };
}
