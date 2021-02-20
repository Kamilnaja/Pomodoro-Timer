import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Login } from '../../../../../types/authInterfaces';
import { createAuthState } from '../../testing/auth.testing.data';
import { LoginComponent } from './LoginComponent';

describe('LoginComponent', () => {
  beforeEach(() => {});

  const handleSubmit = (data: Login) => {};
  const wrapper = shallow(<LoginComponent handleSubmit={handleSubmit} auth={createAuthState()} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
