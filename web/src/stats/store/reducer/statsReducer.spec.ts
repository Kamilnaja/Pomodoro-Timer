import { createPomodoroSearchResult, createStatsSearchResult } from '../../testing/stats.test.data';
import {
  GET_STATS,
  GET_STATS_ERROR,
  GET_STATS_SUCCESS,
  GET_STATS_WITH_TAGS,
  GET_STATS_WITH_TAGS_ERROR,
  GET_STATS_WITH_TAGS_SUCCESS,
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

  it('should handle GET_STATISTIC', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATS,
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle GET_STATISTIC_SUCCESS', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATS_SUCCESS,
        payload: createStatsSearchResult(),
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      stats: createStatsSearchResult(),
    });
  });

  it('should handle GET_STATISTIC_ERROR', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATS_ERROR,
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

  it('should handle GET_STATS_WITH_TAGS', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATS_WITH_TAGS,
      }),
    ).toEqual({
      ...initialState,
      isLoadingWithTags: true,
    });
  });

  it('should handle GET_STATS_WITH_TAGS_ERROR', () => {
    const err = 'something went wrong';
    expect(
      statsReducer(undefined, {
        type: GET_STATS_WITH_TAGS_ERROR,
        payload: err,
      }),
    ).toEqual({
      ...initialState,
      isLoadingWithTags: false,
      error: err,
    });
  });

  it('should handle GET_STATS_WITH_TAGS_SUCCESS', () => {
    expect(
      statsReducer(undefined, {
        type: GET_STATS_WITH_TAGS_SUCCESS,
        payload: createPomodoroSearchResult(),
      }),
    ).toEqual({
      ...initialState,
      isLoadingWithTags: false,
      statsWithTags: createPomodoroSearchResult(),
    });
  });
});
