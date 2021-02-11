import { SearchDate } from '../../../../../types/statisticsInterfaces';
import { StatsState } from '../../containers/statsContainerInterfaces';

export type HandleGetStats = (date: SearchDate) => void;

export interface TodayStatsContainerProps {
  stats: StatsState;
  handleGetTodayStats: HandleGetStats;
}
