import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import {
  HandleGetSettings,
  HandleSaveSettings,
  ToggleSortDirection,
} from '../../../settings/store/actions/settingsActionsTypes';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableContainerProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  settingsState: SettingsState;
  toggleSortDirection: ToggleSortDirection;
  handleGetSettings: HandleGetSettings;
  handleSaveSettings: HandleSaveSettings;
}
