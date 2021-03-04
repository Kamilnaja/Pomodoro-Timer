import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { pause } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterActionsTypes } from '../store/actions/pomodoroCounterActionTypes';
import { createPomodoroCounterState } from '../testing/pomodoroCounter.test.data';
import CounterContainer from './CounterContainer';

const mockStore = configureStore([thunk]);

describe('CounterContainer', () => {
  let store: Store<any, PomodoroCounterActionsTypes>;
  let component: renderer.ReactTestRenderer;
  const handleSavePomodoro = jest.fn();

  beforeEach(() => {
    store = mockStore({
      pomodoroCounter: createPomodoroCounterState(),
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <CounterContainer handleSavePomodoro={handleSavePomodoro} />
      </Provider>,
    );
  });

  it('Should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should pause counter when counter is running', () => {
    const storeSpy = jest.spyOn(store, 'dispatch');
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(storeSpy).toHaveBeenCalledWith(pause());
  });
});
