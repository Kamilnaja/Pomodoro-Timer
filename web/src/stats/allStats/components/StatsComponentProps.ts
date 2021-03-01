import { StatsSearchResult } from '../../../../../types/statisticsInterfaces';
import {
  HandleGetSettings,
  HandleSaveSettings,
  ToggleSortDirection,
} from '../../../settings/store/actions/settingsActionsTypes';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import { HandleGetStats } from '../../store/models/StatsInterfaces';

export type StatsComponentProps = {
  stats: StatsSearchResult;
  settings: SettingsState;
  handleGetStats: HandleGetStats;
  handleGetSettings: HandleGetSettings;
  toggleSortDirection: ToggleSortDirection;
  handleSaveSettings: HandleSaveSettings;
};
