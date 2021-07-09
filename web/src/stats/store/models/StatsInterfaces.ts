import { StatsSearchResult } from '../../../../../types/statsInterfaces';

export interface StatsState {
  isLoading: boolean;
  error: string;
  stats: StatsSearchResult;
  todayResults: number;
}

export type HandleGetStats = (year?: number, month?: number) => void;
