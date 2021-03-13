import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { StatsScreenContainer } from './StatsScreenContainer';

describe('StatsScreenContainer', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<StatsScreenContainer />);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
