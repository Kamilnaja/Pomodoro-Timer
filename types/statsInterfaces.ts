import { SearchResult } from './commonInterfaces';

/*
 * Allows for searching in current year, month or day
 *
 */
export interface SearchDate {
  year: number;
  month: number;
  day?: number;
}

export interface PomodorosDoneInDay {
  date: string;
  count: number;
}

export interface TodayStats {
  result: number;
}

export interface StatsSearchResult {
  pomodoros: PomodorosDoneInDay[];
  hasPreviousPeriod: boolean;
  hasNextPeriod: boolean;
}

export interface StatsWithTagsSearchResult {
  result: Tag[];
}

export interface TodayStatsResult extends SearchResult<number> {}
// todo - get previous, next
export interface Tag extends Partial<TagPartial> {}

interface TagPartial {
  tagId: string;
  tagText: string;
}
