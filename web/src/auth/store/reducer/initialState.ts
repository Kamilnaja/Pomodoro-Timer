import { AuthState } from '../interfaces/authState';

export const authInitialState: AuthState = {
  isLoading: false,
  isSuccess: false,
  isLoggedIn: false,
  error: null as any,
  token: '',
};
