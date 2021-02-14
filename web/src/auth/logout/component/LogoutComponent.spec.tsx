import { shallow } from 'enzyme';
import { handleCancel, handleLogout } from '../../testing/auth.testing.data';
import { LogoutComponent } from './LogoutComponent';

let logoutComponent: any;

describe('LogoutComponent', () => {
  beforeEach(() => {
    logoutComponent = shallow(<LogoutComponent handleLogout={handleLogout} handleCancel={handleCancel} />);
  });

  it('Should have logout wrapper', () => {
    expect(logoutComponent.find('.logout')).toHaveLength(1);
    expect(logoutComponent.find('.logout__question')).toHaveLength(1);
  });

  it('Should start handleCancel method after clicking in handleCancel button', () => {
    logoutComponent.find('.logout__button--no').simulate('click');
  });
});
