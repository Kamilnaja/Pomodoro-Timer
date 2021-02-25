import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';

export interface StatsState {
  isLoading: boolean;
  error: string;
  results: PomodorosDoneInDay[];
  todayResults: number;
}

export type HandleGetStats = (year?: number, month?: number) => void;
