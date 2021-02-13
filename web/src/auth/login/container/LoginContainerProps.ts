import { Login } from '../../../../../types/authInterfaces';
import { AuthState } from '../../store/interfaces/authState';

export interface LoginContainerProps {
  handleSubmit: (arg: Login) => void;
  auth: AuthState;
}
