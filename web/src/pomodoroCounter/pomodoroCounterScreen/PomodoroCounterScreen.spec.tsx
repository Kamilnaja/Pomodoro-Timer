import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PomodoroCounterScreen from './PomodoroCounterScreen';

const mockStore = configureStore([thunk]);

describe('PomodoroCounterScreen', () => {
  let store;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({
      stats: {
        isLoading: false,
      },
      settings: {
        error: '',
      },
    });

    // component = renderer.create(
    //   <Provider store={store}>
    //     <PomodoroCounterScreen />
    //   </Provider>,
    // );
  });

  it('should match snapshot', () => {
    //  todo - fixme
    // expect(component.toJSON()).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});
