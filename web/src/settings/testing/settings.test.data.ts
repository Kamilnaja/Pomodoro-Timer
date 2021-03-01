import { Settings } from '../../../../types/settingsInterface';
import { DisplayDirection, SettingsState } from '../store/interfaces/settingsInterfaces';

export const createSettings = (): Settings => ({
  isCookieConsentAccepted: true,
  isSoundEnabled: true,
  displayDirection: DisplayDirection.ASC,
});

export const createError = (): Error => ({
  message: 'something went wrong',
  name: 'error',
});

export const createSettingsState = (): SettingsState => ({
  error: '',
  isCookieAcceptInfoVisible: false,
  isLoading: false,
  settings: createSettings(),
});

export const createDisplayDirection = (): DisplayDirection => DisplayDirection.ASC;
