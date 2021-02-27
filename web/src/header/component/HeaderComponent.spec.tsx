import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { HeaderComponent } from './HeaderComponent';

describe('HeaderComponent', () => {
  const component = shallow(<HeaderComponent handleOpenModal={() => {}} isLoggedIn={true} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
