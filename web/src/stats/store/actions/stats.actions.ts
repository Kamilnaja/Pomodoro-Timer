import TodayStatistics from "./../../../shared/store/interfaces/todayStatistics.interface";

export enum StatsActions {
  GET_TODAY_STATISTICS = "GET_TODAY_STATISTICS",
  GET_TODAY_STATISTICS_SUCCESS = "GET_TODAY_STATISTICS_SUCCESS",
  GET_TODAY_STATISTICS_ERROR = "GET_TODAY_STATISTICS_ERROR",
  INCREMENT_POMODOROS = "INCREMENT_POMODOROS", // updates number of pomodoros make today
}

export const getTodayStatistics = () => ({
  type: StatsActions.GET_TODAY_STATISTICS,
});

export const getTodayStatisticsSuccess = (payload: TodayStatistics) => ({
  type: StatsActions.GET_TODAY_STATISTICS_SUCCESS,
  payload,
});

export const getTodayStatisticsError = (error: any) => ({
  type: StatsActions.GET_TODAY_STATISTICS_ERROR,
  error,
});

export const incrementPomodoros = () => ({
  type: StatsActions.INCREMENT_POMODOROS,
});
