import { PomodorosSearchResult, StatsSearchResult } from '../../../../../types/statsInterfaces';

export interface StatsState {
  isLoading: boolean;
  isLoadingWithTags: boolean;
  error: string;
  stats: StatsSearchResult;
  statsWithTags: PomodorosSearchResult;
  todayResults: number;
}

export type HandleGetStats = (year?: number, month?: number) => void;
