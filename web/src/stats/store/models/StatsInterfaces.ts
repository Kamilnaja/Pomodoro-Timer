import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';

export interface StatsState {
  isLoading: boolean;
  error: string;
  results: PomodorosDoneInDay[];
  todayResults: number;
  accountActiveFrom: Date;
}

export type HandleGetStats = (year?: number, month?: number) => void;
