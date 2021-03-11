import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Tag } from '../../../../types/statsInterfaces';
import { createTags } from '../testing/tags.test.data';
import { TagComponent } from './TagComponent';

describe('TagComponent', () => {
  let wrapper: ShallowWrapper;
  const tags: Tag[] = createTags();
  const handleChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<TagComponent tags={tags} handleChange={handleChange} />);
  });

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
