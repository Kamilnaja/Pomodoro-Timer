import StatsSearchResult from '../../../../../types/statistics.interfaces';

export default interface Stats {
  stats: StatsSearchResult;
  allPomodoros: number;
  error: string;
  isLoading: boolean;
}
