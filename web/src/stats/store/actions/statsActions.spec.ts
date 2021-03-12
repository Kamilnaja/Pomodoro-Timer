import fetchMock from 'fetch-mock';
import fetchMockJest from 'fetch-mock-jest';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createPomodoros, createPomodoroSearchResult } from '../../testing/stats.test.data';
import * as actions from './statsActions';
import { GET_TODAY_STATS, GET_TODAY_STATS_SUCCESS, StatsActionsTypes } from './statsActionsTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const expectedActions: StatsActionsTypes[] = [
  {
    type: GET_TODAY_STATS,
  },
  { type: GET_TODAY_STATS_SUCCESS, payload: 0 },
];

describe('statsActions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const store = mockStore({ stats: [] });

  it('should works for handleGetTodayStats', () => {
    fetchMockJest.getOnce('*', {
      body: { pomodoros: createPomodoroSearchResult() },
      headers: { 'content-type': 'application/json' },
    });

    return store.dispatch(actions.handleGetTodayStats() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
