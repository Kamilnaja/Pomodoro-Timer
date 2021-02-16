import { AuthState } from '../../auth/store/interfaces/authState';
import { PomodoroCounterActions } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface PomodoroCounterContainerProps {
  handleSavePomodoro: () => void;
  auth: AuthState;
  pomodoroCounter: PomodoroCounterState;
  pomodoroRun: () => void;
  breakRun: () => void;
  pomodoroPause: () => void;
  breakPause: () => void;
  breakEnd: () => void;
  pomodoroEnd: () => void;
}
