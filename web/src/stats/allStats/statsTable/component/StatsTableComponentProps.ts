import { PomodorosDoneInDay } from '../../../../../../types/statisticsInterfaces';
import { SortDirection } from '../../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableComponentProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  sortDirection: SortDirection;
  toggleSortDirection: () => void;
}
