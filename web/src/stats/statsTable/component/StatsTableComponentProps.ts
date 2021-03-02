import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import { ToggleDisplayDirection } from '../../../settings/store/actions/settingsActionsTypes';
import { DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableComponentProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  displayDirection: DisplayDirection;
  toggleDisplayDirection: ToggleDisplayDirection;
}