import { AuthState } from '../../../auth/store/interfaces/authState';
import { TimerState } from '../../store/enums/timerEnum';

export interface InfoComponentProps {
  currentState: TimerState;
  authState: AuthState;
}
