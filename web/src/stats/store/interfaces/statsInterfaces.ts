import { Result } from '../../../../../types/statisticsInterfaces';

export type HandleGetStats = (year: number, month: number) => void;

export type StatsComponentProps = { stats: Result[]; handleGetStats: HandleGetStats };

export type StatsContainerProps = {
  handleGetStats: HandleGetStats;
  stats: StatsState;
};

export interface StatsState {
  isLoading: boolean;
  error: string;
  results: Result[];
}
