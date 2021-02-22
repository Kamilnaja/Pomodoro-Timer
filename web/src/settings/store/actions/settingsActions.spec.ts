import { createError, createSettings } from '../../testing/settings.test.data';
import * as actions from './settingsActions';
import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SettingsActionsType,
} from './settingsActionsTypes';

describe('settingsActions', () => {
  it('should return getSettings', () => {
    const expectedAction: SettingsActionsType = {
      type: GET_SETTINGS,
    };

    expect(actions.getSettings()).toEqual(expectedAction);
  });

  it('should return getSettingsSuccess', () => {
    const payload = createSettings();

    const expectedAction: SettingsActionsType = {
      type: GET_SETTINGS_SUCCESS,
      payload,
    };

    expect(actions.getSettingsSuccess(payload)).toEqual(expectedAction);
  });

  it('should return getSettingsError', () => {
    const payload = createError();
    const expectedAction: SettingsActionsType = {
      type: GET_SETTINGS_ERROR,
      payload,
    };

    expect(actions.getSettingsError(payload)).toEqual(expectedAction);
  });

  it('should return saveSettings', () => {
    const expectedAction: SettingsActionsType = {
      type: SAVE_SETTINGS,
    };

    expect(actions.saveSettings()).toEqual(expectedAction);
  });

  it('should return saveSettingsSuccess', () => {
    const expectedAction: SettingsActionsType = {
      type: SAVE_SETTINGS_SUCCESS,
    };

    expect(actions.saveSettingsSuccess()).toEqual(expectedAction);
  });

  it('should return saveSettingsError', () => {
    const payload = createError();

    const expectedAction: SettingsActionsType = {
      type: SAVE_SETTINGS_ERROR,
      payload,
    };

    expect(actions.saveSettingsError(payload)).toEqual(expectedAction);
  });
});
