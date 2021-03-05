import { createError, createSettings } from '../../testing/settings.test.data';
import {
  GET_SETTINGS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_SUCCESS,
  HIDE_COOKIE_INFO,
  SAVE_SETTINGS,
  SAVE_SETTINGS_ERROR,
  SAVE_SETTINGS_SUCCESS,
  SET_DISPLAY_DIRECTION,
  SET_DISPLAY_EMPTY_DAYS,
} from '../actions/settingsActionsTypes';
import { DisplayDirection } from '../interfaces/settingsInterfaces';
import { settingsReducer, settingsReducerInitialState } from './settingsReducer';

describe('settingsReducer', () => {
  it('Should render the initial state', () => {
    expect(settingsReducer(undefined, { type: null })).toEqual(settingsReducerInitialState);
  });

  it('Should handle GET_SETTINGS', () => {
    expect(
      settingsReducer(undefined, {
        type: GET_SETTINGS,
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      isLoading: true,
      error: null,
    });
  });

  it('Should handle GET_SETTINGS_SUCCESS', () => {
    expect(
      settingsReducer(undefined, {
        type: GET_SETTINGS_SUCCESS,
        payload: createSettings(),
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      settings: createSettings(),
      isLoading: false,
      error: null,
    });
  });

  it('Should handle GET_SETTINGS_ERROR', () => {
    expect(
      settingsReducer(undefined, {
        type: GET_SETTINGS_ERROR,
        payload: createError(),
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      isLoading: false,
      error: createError(),
    });
  });

  it('Should handle SAVE_SETTINGS', () => {
    expect(
      settingsReducer(undefined, {
        type: SAVE_SETTINGS,
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      isLoading: true,
    });
  });

  it('Should handle SAVE_SETTINGS_ERROR', () => {
    expect(
      settingsReducer(undefined, {
        type: SAVE_SETTINGS_ERROR,
        payload: createError(),
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      isLoading: false,
      error: createError(),
    });
  });

  it('Should handle SAVE_SETTINGS_SUCCESS', () => {
    expect(
      settingsReducer(undefined, {
        type: SAVE_SETTINGS_SUCCESS,
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      isLoading: false,
      isCookieAcceptInfoVisible: false,
    });
  });

  it('Should handle HIDE_COOKIE_INFO', () => {
    expect(
      settingsReducer(undefined, {
        type: HIDE_COOKIE_INFO,
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      isCookieAcceptInfoVisible: false,
    });
  });

  it('Should handle SET_DISPLAY_DIRECTION', () => {
    expect(
      settingsReducer(undefined, {
        type: SET_DISPLAY_DIRECTION,
        payload: DisplayDirection.ASC,
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      settings: {
        ...settingsReducerInitialState.settings,
        displayDirection: DisplayDirection.ASC,
      },
    });
  });

  it('Should handle SET_DISPLAY_EMPTY_DAYS', () => {
    expect(
      settingsReducer(undefined, {
        type: SET_DISPLAY_EMPTY_DAYS,
        payload: true,
      }),
    ).toEqual({
      ...settingsReducerInitialState,
      settings: {
        ...settingsReducerInitialState.settings,
        displayEmptyDays: true,
      },
    });
  });
});
