import { AuthState } from '../../auth/store/interfaces/authState';
import { CounterState } from '../state/enums/timerEnum';

export interface InfoComponentProps {
  currentState: CounterState;
  authState: AuthState;
}
