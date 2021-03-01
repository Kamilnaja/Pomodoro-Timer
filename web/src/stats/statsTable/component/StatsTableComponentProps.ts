import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import { ToggleDisplayDirection } from '../../../settings/store/actions/settingsActionsTypes';
import { SortDirection } from '../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableComponentProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  sortDirection: SortDirection;
  toggleDisplayDirection: ToggleDisplayDirection;
}
