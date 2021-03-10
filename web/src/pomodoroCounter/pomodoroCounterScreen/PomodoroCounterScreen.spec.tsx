import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PomodoroCounterScreen from './PomodoroCounterScreen';

describe('PomodoroCounterScreen', () => {
  const wrapper = shallow(<PomodoroCounterScreen />);

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
