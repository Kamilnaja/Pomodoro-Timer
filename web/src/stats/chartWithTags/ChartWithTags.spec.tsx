import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createPomodoroSearchResult } from '../testing/stats.test.data';
import { ChartWithTags } from './ChartWithTags';

describe('ChartWithTags', () => {
  let wrapper: ShallowWrapper;
  const statsWithTags = createPomodoroSearchResult();

  beforeEach(() => {
    wrapper = shallow(<ChartWithTags statsWithTags={statsWithTags} />);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
