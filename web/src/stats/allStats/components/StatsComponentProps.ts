import { StatsSearchResult } from '../../../../../types/statisticsInterfaces';
import {
  HandleGetSettings,
  HandleSaveSettings,
  ToggleDisplayDirection,
} from '../../../settings/store/actions/settingsActionsTypes';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import { HandleGetStats } from '../../store/models/StatsInterfaces';

export type StatsComponentProps = {
  stats: StatsSearchResult;
  settings: SettingsState;
  handleGetStats: HandleGetStats;
  handleGetSettings: HandleGetSettings;
  toggleDisplayDirection: ToggleDisplayDirection;
  handleSaveSettings: HandleSaveSettings;
};
