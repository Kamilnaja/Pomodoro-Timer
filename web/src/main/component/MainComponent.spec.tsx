import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { ModalType } from '../../shared/modal/modalEnum';
import { MainComponent } from './MainComponent';

describe('MainComponent', () => {
  let wrapper: ShallowWrapper;
  const handleCloseModal = jest.fn();
  const handleOpenModal = jest.fn();
  const openedModal = ModalType.LOGIN;

  beforeEach(() => {
    wrapper = shallow(
      <MainComponent
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        openedModal={openedModal}
        isLoggedIn={false}
      />,
    );
  });

  it('should works', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
