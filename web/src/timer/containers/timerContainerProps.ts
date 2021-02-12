import { Action } from 'redux';
import { AuthState } from '../../auth/store/interfaces/authState';

export interface TimerContainerProps {
  dispatch?: (args: Action) => void;
  savePomodoroAndReloadStats: () => void;
  authState: AuthState;
}
