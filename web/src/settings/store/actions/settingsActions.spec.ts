import { createError, createSettings } from '../../testing/settings.test.data';
import { DisplayDirection } from '../interfaces/settingsInterfaces';
import * as actions from './settingsActions';
import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  HIDE_COOKIE_INFO,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SettingsActionsType,
  SET_DISPLAY_DIRECTION,
  SET_DISPLAY_EMPTY_DAYS,
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

  it('should return hideCookieInfo', () => {
    const expectedAction: SettingsActionsType = {
      type: HIDE_COOKIE_INFO,
    };

    expect(actions.hideCookieInfo()).toEqual(expectedAction);
  });

  it('toggleDisplayDirection', () => {
    const payload = DisplayDirection.ASC;

    const expected: SettingsActionsType = {
      type: SET_DISPLAY_DIRECTION,
      payload,
    };

    expect(actions.toggleDisplayDirection(payload)).toEqual(expected);
  });

  it('toggleDisplayEmptyDays', () => {
    const payload = true;

    const expected: SettingsActionsType = {
      type: SET_DISPLAY_EMPTY_DAYS,
      payload,
    };

    expect(actions.toggleDisplayEmptyDays(payload)).toEqual(expected);
  });
});
