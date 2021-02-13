import { Registration } from '../../../../../types/authInterfaces';
import { AuthState } from '../../store/interfaces/authState';

export interface RegisterContainerProps {
  handleSubmit: (arg: Registration) => void;
  auth: AuthState;
}
