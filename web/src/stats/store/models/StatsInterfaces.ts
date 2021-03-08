import { StatsSearchResult, Tag } from '../../../../../types/statsInterfaces';

export interface StatsState {
  isLoading: boolean;
  isLoadingWithTags: boolean;
  error: string;
  stats: StatsSearchResult;
  statsWithTags: Tag[];
  todayResults: number;
}

export type HandleGetStats = (year?: number, month?: number) => void;
