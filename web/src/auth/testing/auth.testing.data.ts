import { AuthError, ErrorCodes, Login, Registration } from '../../../../types/authInterfaces';
import { AuthState } from '../store/interfaces/authState';

export const createAuthError: AuthError = {
  code: ErrorCodes.EMAIL_CURRENTLY_EXISTS,
  message: 'Gerarahia',
};

export const createAuthState = (isSuccess: boolean, isLoading?: boolean): AuthState => ({
  error: null,
  isLoading,
  isLoggedIn: false,
  isSuccess,
  token: '***** ***',
});

export const createLoginData = (): Login => ({
  login: '',
  password: '',
});

export const createRegistrationData = (): Registration => ({
  email: 'k@gmail.com',
  login: 'k',
  password: 'k',
});

export const handleSubmit = (data: Login) => {};

export const handleLogout = () => {};

export const handleCancel = () => {};
