import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { LogoutComponent } from './LogoutComponent';

const handleLogout = jest.fn().mockImplementation(() => {});
const handleCancel = jest.fn().mockImplementation(() => {});

let wrapper: any;

describe('LogoutComponent', () => {
  beforeEach(() => {
    wrapper = shallow(<LogoutComponent handleLogout={handleLogout} handleCancel={handleCancel} />);
  });

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should have logout wrapper', () => {
    expect(wrapper.find('.logout')).toHaveLength(1);
    expect(wrapper.find('.logout__question')).toHaveLength(1);
  });

  it('Should start handleLogout method after clicking in handleCancel button', () => {
    wrapper.find('.logout__button--yes').simulate('click');

    expect(handleLogout).toHaveBeenCalledTimes(1);
  });

  it('Should start handleCancel method after clicking in handleCancel button', () => {
    wrapper.find('.logout__button--no').simulate('click');

    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
