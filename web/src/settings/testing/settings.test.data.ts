import { Settings } from '../../../../types/settingsInterface';

export const createSettings = (): Settings => ({
  isCookieConsentAccepted: true,
  isSoundEnabled: true,
});

export const createError = (): Error => ({
  message: 'something went wrong',
  name: 'error',
});
