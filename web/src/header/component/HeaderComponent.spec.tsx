import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ModalType } from '../../shared/modal/modalEnum';
import { HeaderComponent } from './HeaderComponent';

const handleOpenModal = jest.fn().mockImplementation(() => {});

describe('HeaderComponent', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderComponent handleOpenModal={handleOpenModal} isLoggedIn={true} />);
  });

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({
      isLoggedIn: false,
    });

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it.each([
    ['.button--login', ModalType.LOGIN, false],
    ['.button--register', ModalType.REGISTER, false],
    ['.button--logout', ModalType.LOGOUT, true],
  ])('Should click on %s and open modal %s', (button, modal, isLoggedIn) => {
    wrapper.setProps({
      isLoggedIn,
    });

    wrapper.find(button).simulate('click');

    expect(handleOpenModal).toHaveBeenCalledWith(modal);
  });
});
