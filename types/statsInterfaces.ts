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

export interface PomodoroSearchResult extends SearchResult<Pomodoro> {}

export interface TodayStatsResult extends SearchResult<number> {}

export interface Pomodoro {
  tagText: string;
  createdAt: string;
}
