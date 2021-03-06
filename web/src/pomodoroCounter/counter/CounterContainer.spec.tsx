import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { pause, run } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterActionsTypes } from '../store/actions/pomodoroCounterActionTypes';
import { CounterState } from '../store/enums/CounterState';
import { createPomodoroCounterState } from '../testing/pomodoroCounter.test.data';
import CounterContainer from './CounterContainer';
import * as Helpers from '../pomodoroCounterScreen/PomodoroCounterScreenHelpers';

const mockStore = configureStore([thunk]);

describe('CounterContainer', () => {
  let store: Store<any, PomodoroCounterActionsTypes>;
  let component: renderer.ReactTestRenderer;
  let playClickSoundSpy: any;

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
      component.root.findByProps({ className: 'btn--pause' }).props.onClick();
    });

    expect(storeSpy).toHaveBeenCalledWith(pause());
  });

  xit('Should start counter', () => {
    const storeSpy = jest.spyOn(store, 'dispatch');
    jest.spyOn(Helpers, 'playClickSound');

    store = mockStore({
      pomodoroCounter: createPomodoroCounterState(CounterState.END),
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <CounterContainer handleSavePomodoro={handleSavePomodoro} />
      </Provider>,
    );

    renderer.act(() => {
      component.root.findByProps({ className: 'btn--start' }).props.onClick();
    });

    expect(storeSpy).toHaveBeenCalledWith(run());
    expect(playClickSoundSpy).toHaveBeenCalledTimes(1);
  });
});
