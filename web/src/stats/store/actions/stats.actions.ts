import TodayStatistics from "./../../../shared/store/interfaces/todayStatistics.interface";

export enum StatsActions {
  GET_TODAY_STATISTICS = "GET_TODAY_STATISTICS",
  GET_TODAY_STATISTICS_SUCCESS = "GET_TODAY_STATISTICS_SUCCESS",
  GET_TODAY_STATISTICS_ERROR = "GET_TODAY_STATISTICS_ERROR",
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
