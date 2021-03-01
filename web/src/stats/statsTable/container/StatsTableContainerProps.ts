import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import {
  HandleGetSettings,
  HandleSaveSettings,
  ToggleDisplayDirection,
} from '../../../settings/store/actions/settingsActionsTypes';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableContainerProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  settingsState: SettingsState;
  toggleDisplayDirection: ToggleDisplayDirection;
  handleGetSettings: HandleGetSettings;
  handleSaveSettings: HandleSaveSettings;
}
