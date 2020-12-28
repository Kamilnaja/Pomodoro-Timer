import { handleErrors } from "../../main/store/thunk/main.thunk";
import { initialConfig } from "../../shared/settings/initialConfig";
import TodayStatistics from "../../shared/store/interfaces/todayStatistics.interface";
import {
  getTodayStatistics,
  getTodayStatisticsError,
  getTodayStatisticsSuccess,
} from "../store/actions/stats.actions";

const API_URL = initialConfig.apiUrl;

const makeGetRequest = () => fetch(API_URL + "/pomodoros_done_today");

export const getPomodorosThunk = () => (dispatch: Function) => {
  dispatch(getTodayStatistics());

  return makeGetRequest()
    .then(handleErrors)
    .then((response) => response.json())
    .then((payload: TodayStatistics) => {
      return dispatch(getTodayStatisticsSuccess(payload));
    })
    .catch((error) => dispatch(getTodayStatisticsError(error)));
};
