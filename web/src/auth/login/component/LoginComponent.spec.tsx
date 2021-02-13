import { shallow } from 'enzyme';
import { AuthError, ErrorCodes, Login } from '../../../../../types/authInterfaces';
import { AuthState } from '../../store/interfaces/authState';
import { LoginComponent } from './LoginComponent';

test('Login component should create', () => {
  const loginData: Login = {
    login: '',
    password: '',
  };

  const authError: AuthError = {
    code: ErrorCodes.EMAIL_CURRENTLY_EXISTS,
    message: 'Gerarahia',
  };
  const auth: AuthState = {
    error: authError,
    isLoading: true,
    isLoggedIn: true,
    isSuccess: true,
    token: '***** ***',
  };
  const handleSubmit = (data: Login) => {};
  const login = shallow(<LoginComponent handleSubmit={handleSubmit} auth={auth} />);

  expect(login).not.toBeNull();
});
