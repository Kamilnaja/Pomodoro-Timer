import { PomodorosDoneInDay } from '../../../../types/statisticsInterfaces';
import { StatsState } from '../store/models/StatsInterfaces';

export const createStatsState = (): StatsState => ({
  isLoading: false,
  error: null,
  todayResults: 10,
  results: [],
});

export const createStats = (): PomodorosDoneInDay[] => [
  {
    count: 10,
    date: new Date().toDateString(),
  },
];
