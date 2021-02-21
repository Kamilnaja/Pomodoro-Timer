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

export interface StatsSearchResult extends SearchResult<PomodorosDoneInDay[]> {}

export interface TodayStatsResult extends SearchResult<number> {}
