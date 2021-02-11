import { StatsState } from '../../containers/statsContainerInterfaces';

export type HandleGetStats = () => void;

export interface TodayStatsContainerProps {
  stats: StatsState;
  handleGetTodayStats: HandleGetStats;
}
