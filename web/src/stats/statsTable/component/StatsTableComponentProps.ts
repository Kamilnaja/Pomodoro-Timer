import { Settings } from '../../../../../types/settingsInterface';
import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import { ToggleDisplayDirection, ToggleDisplayEmptyDays } from '../../../settings/store/actions/settingsActionsTypes';

export interface StatsTableComponentProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  settings: Settings;
  toggleDisplayDirection: ToggleDisplayDirection;
  toggleDisplayEmptyDays: ToggleDisplayEmptyDays;
}
