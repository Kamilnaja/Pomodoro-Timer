import { Login } from '../../../../../types/authInterfaces';
import { AuthState } from '../../store/interfaces/authState';

export interface LoginComponentProps {
  handleSubmit: (data: Login) => void;
  auth: AuthState;
}

export type FormData = {
  login: string;
  password: string;
};
