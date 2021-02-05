import { AuthError } from '../../../../../types/authInterfaces';

export interface AuthState {
  isLoading: boolean;
  error: AuthError;
  isSuccess: boolean;
  isLoggedIn: boolean;
  token: string;
}
