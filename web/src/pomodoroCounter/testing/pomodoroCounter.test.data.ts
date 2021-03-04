import { AuthState } from '../../auth/store/interfaces/authState';
import { CounterState } from '../store/enums/CounterState';
import { CurrentTimer, PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export const createCurrentState = (): CounterState => CounterState.END;
export const createAuth = (): AuthState => ({
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isSuccess: false,
  token: 'asdf',
});
export const createPomodoroCounterState = (): PomodoroCounterState => ({
  counterState: createCurrentState(),
  counterTime: 100500100900,
  currentTimer: CurrentTimer.POMODORO,
});
