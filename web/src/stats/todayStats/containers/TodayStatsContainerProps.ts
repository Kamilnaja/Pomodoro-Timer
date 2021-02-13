import { HandleGetStats, StatsState } from '../../store/models/StatsInterfaces';

export interface TodayStatsContainerProps {
  stats: StatsState;
  handleGetTodayStats: HandleGetStats;
}
