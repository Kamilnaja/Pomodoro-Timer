import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';

const mockStore = configureStore([thunk]);

describe('CounterContainer', () => {
  let store;
  let component: renderer.ReactTestRenderer;
  const handleSavePomodoro = jest.fn();

  beforeEach(() => {
    store = mockStore({});

    component = renderer.create(
      <Provider store={store}>
        <CounterContainer handleSavePomodoro={handleSavePomodoro} />
      </Provider>,
    );
  });
});
