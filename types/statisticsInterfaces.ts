import { SearchResult } from './commonInterfaces';

export interface PomodoroEntry {
  date: string;
  count: number;
}

export default interface StatsSearchResult extends SearchResult<PomodoroEntry> {}
