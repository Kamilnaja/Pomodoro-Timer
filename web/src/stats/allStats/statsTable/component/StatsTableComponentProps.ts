import { PomodorosDoneInDay } from '../../../../../../types/statisticsInterfaces';

export interface StatsTableComponentProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
}
