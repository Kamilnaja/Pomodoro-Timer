import { HandleGetSettings, HandleSaveSettings } from '../../../settings/store/actions/settingsActionsTypes';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import { StatsState } from '../../store/models/StatsInterfaces';

type HandleGetStats = (year: number, month: number) => void;

export type StatsContainerProps = {
  handleGetStats: HandleGetStats;
  handleSaveSettings: HandleSaveSettings;
  handleGetSettings: HandleGetSettings;
  stats: StatsState;
  settingsState: SettingsState;
};
