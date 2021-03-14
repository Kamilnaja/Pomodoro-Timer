import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Modal } from './Modal';
import { ModalType } from './modalEnum';

describe('Modal', () => {
  let wrapper: ShallowWrapper;
  const closeModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Modal modalType={ModalType.LOGIN} closeModal={closeModal} />);
  });

  it('should work', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
