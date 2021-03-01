import { Settings } from '../../../../types/settingsInterface';
import { DisplayDirection } from '../store/interfaces/settingsInterfaces';

export const createSettings = (): Settings => ({
  isCookieConsentAccepted: true,
  isSoundEnabled: true,
  displayDirection: DisplayDirection.ASC,
});

export const createError = (): Error => ({
  message: 'something went wrong',
  name: 'error',
});
