import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StatsActionsTypes } from '../../store/actions/statsActionsTypes';
import { createStatsState } from '../../testing/stats.test.data';
import { TodayStatsComponent } from '../components/TodayStatsComponent';
import TodayStatsContainer from './TodayStatsContainer';

const mockStore = configureStore([thunk]);

describe('StatsContainer', () => {
  let component: renderer.ReactTestRenderer;
  let store: Store<any, StatsActionsTypes>;

  beforeEach(() => {
    store = mockStore({
      stats: createStatsState(),
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <TodayStatsContainer />
      </Provider>,
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
