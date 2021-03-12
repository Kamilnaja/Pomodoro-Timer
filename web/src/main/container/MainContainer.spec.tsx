import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CounterState } from '../../pomodoroCounter/store/enums/CounterState';
import { ReducersCombined } from '../../store/reducers/ReducersCombined';
import { createTagsState } from '../../tag/testing/tags.test.data';
import MainContainer from './MainContainer';

const mockStore = configureStore([thunk]);

describe('MainContainer', () => {
  let store;
  let component: renderer.ReactTestRenderer;

  const state: ReducersCombined = {
    auth: {
      isLoggedIn: true,
    },
    pomodoroCounter: {
      counterState: CounterState.RUNNING,
    },
    stats: {
      isLoading: false,
    },
    settings: {
      error: '',
    },
    tags: createTagsState(),
  };

  beforeEach(() => {
    store = mockStore(state);

    component = renderer.create(
      <Provider store={store}>
        <MainContainer />
      </Provider>,
    );
  });

  it('Should match the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
