import { AuthState } from '../../../auth/store/interfaces/authState';

export interface TimerContainerProps {
  handleSavePomodoro: () => void;
  authState: AuthState;
}
