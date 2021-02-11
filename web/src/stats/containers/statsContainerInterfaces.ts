import { PomodorosDoneInDay } from '../../../../types/statisticsInterfaces';
// todo - Date obj
export type HandleGetStats = (year: number, month: number) => void;

export type StatsContainerProps = {
  handleGetStats: HandleGetStats;
  stats: StatsState;
};

export interface StatsState {
  isLoading: boolean;
  error: string;
  results: PomodorosDoneInDay[];
  todayResults: number;
}
