import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';

export interface StatsTableProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
}
