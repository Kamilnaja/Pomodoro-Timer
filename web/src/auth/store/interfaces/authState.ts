import { AuthError } from '../../../../../types/interfaces';

export interface AuthState {
  isLoading: boolean;
  error: AuthError;
  isSuccess: boolean;
  isLoggedIn: boolean;
  token: string;
}
