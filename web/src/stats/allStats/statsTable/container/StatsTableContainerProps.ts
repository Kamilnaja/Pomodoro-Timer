import { PomodorosDoneInDay } from '../../../../../../types/statisticsInterfaces';

export interface StatsTableContainerProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
}
