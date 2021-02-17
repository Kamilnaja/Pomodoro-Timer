import { AuthState } from '../../auth/store/interfaces/authState';
import { CounterState } from '../store/enums/CounterState';

export interface InfoComponentProps {
  currentState: CounterState;
  auth: AuthState;
}
