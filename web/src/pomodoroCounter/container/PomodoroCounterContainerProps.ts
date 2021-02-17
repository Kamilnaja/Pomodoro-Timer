import { AuthState } from '../../auth/store/interfaces/authState';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface PomodoroCounterContainerProps {
  handleSavePomodoro: () => void;
  auth: AuthState;
  pomodoroCounter: PomodoroCounterState;
  breakEnd: () => void;
  pomodoroEnd: () => void;
}
