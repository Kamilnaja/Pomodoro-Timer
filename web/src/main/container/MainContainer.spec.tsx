import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MainContainer from './MainContainer';
import thunk from 'redux-thunk';
import { CounterState } from '../../pomodoroCounter/store/enums/CounterState';

const mockStore = configureStore([thunk]);

describe('MainContainer', () => {
  let store;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({
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
    });

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
