import {
  Pomodoro,
  PomodorosDoneInDay,
  PomodorosSearchResult,
  StatsSearchResult,
} from '../../../../types/statsInterfaces';
import { StatsState } from '../store/models/StatsInterfaces';

export const createStatsState = (): StatsState => ({
  isLoading: false,
  error: null,
  todayResults: 10,
  stats: null,
});

export const createStatsSearchResult = (): StatsSearchResult => ({
  hasNextPeriod: true,
  hasPreviousPeriod: false,
  pomodoros: createPomodorosDoneInDay(),
});

export const createPomodorosDoneInDay = (): PomodorosDoneInDay[] => [
  { date: '21-02-2021', count: 8 },
  { date: '20-02-2021', count: 15 },
  { date: '19-02-2021', count: 16 },
  { date: '18-02-2021', count: 19 },
  { date: '17-02-2021', count: 18 },
  { date: '16-02-2021', count: 11 },
  { date: '15-02-2021', count: 16 },
  { date: '14-02-2021', count: 13 },
  { date: '13-02-2021', count: 14 },
  { date: '12-02-2021', count: 9 },
  { date: '11-02-2021', count: 11 },
  { date: '10-02-2021', count: 13 },
  { date: '09-02-2021', count: 13 },
  { date: '08-02-2021', count: 18 },
  { date: '07-02-2021', count: 14 },
  { date: '06-02-2021', count: 16 },
  { date: '05-02-2021', count: 13 },
  { date: '04-02-2021', count: 12 },
  { date: '03-02-2021', count: 16 },
  { date: '02-02-2021', count: 15 },
  { date: '01-02-2021', count: 17 },
];

export const createPomodoros = (): Pomodoro[] => [
  { tagText: null, createdAt: '2021-03-01T05:47:01.476Z' },
  { tagText: null, createdAt: '2021-03-01T06:13:36.785Z' },
  { tagText: null, createdAt: '2021-03-01T17:28:16.182Z' },
  { tagText: null, createdAt: '2021-03-02T19:59:00.403Z' },
];

export const createPomodoroSearchResult = (): PomodorosSearchResult => ({
  result: createPomodoros(),
  hasNextPeriod: false,
  hasPreviousPeriod: true,
});
