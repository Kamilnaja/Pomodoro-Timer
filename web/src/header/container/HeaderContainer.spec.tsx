import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HeaderContainer from './HeaderContainer';

describe('LoginContainer', () => {
  const component = shallow(<HeaderContainer isLoggedIn={true} handleOpenModal={() => {}} />);

  beforeEach(() => {});

  it('Should match the snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
