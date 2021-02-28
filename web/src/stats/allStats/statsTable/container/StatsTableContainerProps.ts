import { Settings } from '../../../../../../types/settingsInterface';
import { PomodorosDoneInDay } from '../../../../../../types/statisticsInterfaces';
import { SettingsState } from '../../../../settings/store/interfaces/settingsInterfaces';

export interface StatsTableContainerProps {
  pageMonth: number;
  pageYear: number;
  pomodoros: PomodorosDoneInDay[];
  settingsState: SettingsState;
  handleGetSettings: () => void;
  handleSaveSettings: (settings: Settings) => void;
}
