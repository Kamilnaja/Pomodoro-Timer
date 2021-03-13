import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createComputedPropertyName } from 'typescript';
import { createAuthState } from '../../auth/testing/auth.testing.data';
import MainContainer from '../../main/container/MainContainer';
import { createPomodoroCounterState } from '../../pomodoroCounter/testing/pomodoroCounter.test.data';
import { createSettingsState } from '../../settings/testing/settings.test.data';
import { createStatsState } from '../../stats/testing/stats.test.data';
import { Reducers, ReducersCombined } from '../../store/models/ReducersCombined';
import { createTags, createTagsState } from '../testing/tags.test.data';

const mockStore = configureStore([thunk]);

describe('TagsContainer', () => {
  let store;
  let component: renderer.ReactTestRenderer;

  const states: ReducersCombined = {
    stats: createStatsState(),
    auth: createAuthState(true),
    pomodoroCounter: createPomodoroCounterState(),
    tags: createTagsState(),
    settings: createSettingsState(),
  };

  beforeEach(() => {
    store = mockStore(states);

    component = renderer.create(
      <Provider store={store}>
        <MainContainer />
      </Provider>,
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
