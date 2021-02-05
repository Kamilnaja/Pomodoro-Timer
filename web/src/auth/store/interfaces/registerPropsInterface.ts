import { Registration } from '../../../../../types/authInterfaces';
import { AuthState } from './authState';

export interface RegisterComponentProps {
  handleSubmit: (arg: Registration) => void;
  formState: AuthState;
}

export type RegisterFormData = {
  login: string;
  email: string;
  password: string;
  repeatedPassword: string;
};
