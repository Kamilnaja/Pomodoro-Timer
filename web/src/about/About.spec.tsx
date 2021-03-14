import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { About } from './About';

describe('About', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
