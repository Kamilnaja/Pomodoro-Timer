import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { TagComponent } from './TagComponent';

describe('TagComponent', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<TagComponent />);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
