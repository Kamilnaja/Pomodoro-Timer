import { createStatsSearchResult } from '../../testing/stats.test.data';
import {
  GET_STATISTIC_IN_PERIOD,
  GET_STATISTIC_IN_PERIOD_ERROR,
  GET_STATISTIC_IN_PERIOD_SUCCESS,
  GET_TODAY_STATS,
  GET_TODAY_STATS_ERROR,
  GET_TODAY_STATS_SUCCESS,
  SAVE_POMODORO,
  SAVE_POMODORO_ERROR,
  SAVE_POMODORO_SUCCESS,
} from '../actions/statsActionsTypes';
import { initialState, statsReducer } from './statsReducer';

describe('statsReducer', () => {
  it('should render the initial state', () => {
    expect(statsReducer(undefined, { type: null })).toEqual(initialState);
  });

  it('should handle SAVE_POMODORO', () => {
    expect(
      statsReducer(undefined, {
        type: SAVE_POMODORO,
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle SAVE_POMODORO_SUCCESS', () => {
    expect(
      statsReducer(undefined, {
        type: SAVE_POMODORO_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it('should handle SAVE_POMODORO_ERROR', () => {
    expect(
      statsReducer(undefined, {
        type: SAVE_POMODORO_ERROR,
        payload: 'something went wrong!',
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: 'something went wrong!',
    });
  });

  it('should handle GET_STATISTIC_IN_PERIOD', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATISTIC_IN_PERIOD,
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle GET_STATISTIC_IN_PERIOD_SUCCESS', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATISTIC_IN_PERIOD_SUCCESS,
        payload: createStatsSearchResult(),
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      results: createStatsSearchResult(),
    });
  });

  it('should handle GET_STATISTIC_IN_PERIOD_ERROR', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATISTIC_IN_PERIOD_ERROR,
        payload: 'error',
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: 'error',
    });
  });

  it('should handle GET_TODAY_STATS', () => {
    expect(
      statsReducer(undefined, {
        type: GET_TODAY_STATS,
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle GET_TODAY_STATS_ERROR', () => {
    expect(
      statsReducer(undefined, {
        type: GET_TODAY_STATS_ERROR,
        payload: 'error',
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: 'error',
    });
  });

  it('should handle GET_TODAY_STATS_SUCCESS', () => {
    expect(
      statsReducer(undefined, {
        type: GET_TODAY_STATS_SUCCESS,
        payload: 1,
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      todayResults: 1,
    });
  });
});
