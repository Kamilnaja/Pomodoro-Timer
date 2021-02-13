import { AuthState } from '../../../auth/store/interfaces/authState';
import { TimerState } from '../../state/enums/timerEnum';

export interface InfoComponentProps {
  currentState: TimerState;
  authState: AuthState;
}
