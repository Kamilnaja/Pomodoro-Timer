import { AuthState } from '../../auth/store/interfaces/authState';

export interface PomodoroCounterContainerProps {
  handleSavePomodoro: () => void;
  authState: AuthState;
}
