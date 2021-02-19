import { AuthState } from '../../auth/store/interfaces/authState';
import { CounterState } from '../store/enums/CounterState';

export const createCurrentState = (): CounterState => CounterState.END;
export const createAuth = (): AuthState => ({
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isSuccess: false,
  token: 'asdf',
});
