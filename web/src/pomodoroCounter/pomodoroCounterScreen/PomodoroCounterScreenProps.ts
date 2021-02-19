import { AuthState } from '../../auth/store/interfaces/authState';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface PomodoroCounterScreenProps {
  auth: AuthState;
  pomodoroCounter: PomodoroCounterState;
  handleSavePomodoro: () => void;
  handleSetModePomodoro: () => void;
  handleSetModeBreak: (time: number) => void;
}
