import { SearchDate } from '../../../../../types/statisticsInterfaces';

export type HandleGetStats = (date: SearchDate) => void;

export interface TodayStatsContainerProps {
  todayStats: number;
  handleGetTodayStats: HandleGetStats;
}
