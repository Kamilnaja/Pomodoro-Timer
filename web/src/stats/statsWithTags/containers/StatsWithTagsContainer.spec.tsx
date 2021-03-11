import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StatsActionsTypes } from '../../store/actions/statsActionsTypes';
import { StatsState } from '../../store/models/StatsInterfaces';
import { createPomodoros, createPomodoroSearchResult, createStatsState } from '../../testing/stats.test.data';
import StatsWithTagsContainer from './StatsWithTagsContainer';

const mockStore = configureStore([thunk]);

describe('StatsContainer', () => {
  let component: renderer.ReactTestRenderer;
  let store: Store<any, StatsActionsTypes>;
  const state: StatsState = createStatsState();

  beforeEach(() => {
    store = mockStore({
      stats: {
        ...state,
        isLoadingWithStats: false,
        statsWithTags: createPomodoroSearchResult(),
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <StatsWithTagsContainer />
      </Provider>,
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});