import { PomodorosDoneInDay } from '../../../../../types/statsInterfaces';
import {
  HandleGetSettings,
  HandleSaveSettings,
  ToggleDisplayDirection,
  ToggleDisplayEmptyDays,
} from '../../../settings/store/actions/settingsActionsTypes';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableContainerProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  settingsState: SettingsState;
  toggleDisplayDirection: ToggleDisplayDirection;
  toggleDisplayEmptyDays: ToggleDisplayEmptyDays;
  handleGetSettings: HandleGetSettings;
  handleSaveSettings: HandleSaveSettings;
}
