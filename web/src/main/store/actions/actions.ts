import TodayStatistics from "./../../../shared/store/interfaces/todayStatistics.interface";

export enum MainActions {
  SAVE_POMODORO = "SAVE_POMODORO",
  SAVE_POMODORO_SUCCESS = "SAVE_POMODORO_SUCCESS",
  SAVE_POMODORO_ERROR = "SAVE_POMODORO_ERROR",

  GET_TODAY_STATISTICS = "GET_TODAY_STATISTICS",
  GET_TODAY_STATISTICS_SUCCESS = "GET_TODAY_STATISTICS_SUCCESS",
  GET_TODAY_STATISTICS_ERROR = "GET_TODAY_STATISTICS_ERROR",
}

export function savePomodoro() {
  return {
    type: MainActions.SAVE_POMODORO,
  };
}

export function savePomodoroSuccess() {
  return {
    type: MainActions.SAVE_POMODORO_SUCCESS,
  };
}

export function savePomodoroError(error: any) {
  return {
    type: MainActions.SAVE_POMODORO_ERROR,
    error,
  };
}

export function getTodayStatistics() {
  return {
    type: MainActions.GET_TODAY_STATISTICS,
  };
}

export function getTodayStatisticsSuccess(payload: TodayStatistics) {
  return {
    type: MainActions.GET_TODAY_STATISTICS_SUCCESS,
    payload,
  };
}

export function getTodayStatisticsError(error: any) {
  return {
    type: MainActions.GET_TODAY_STATISTICS_ERROR,
    error,
  };
}
