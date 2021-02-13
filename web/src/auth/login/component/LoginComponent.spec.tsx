import { shallow } from 'enzyme';
import { LoginComponent } from './LoginComponent';

test('Login component should create', () => {
  const login = shallow(<LoginComponent />);
});
