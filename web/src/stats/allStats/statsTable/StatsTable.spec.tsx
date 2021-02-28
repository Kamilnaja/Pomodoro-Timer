import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createPomodorosDoneInDay } from '../../testing/stats.test.data';
import { StatsTable } from './StatsTable';

describe('StatsTable', () => {
  let wrapper = shallow(<StatsTable pageMonth={11} pageYear={2020} pomodoros={createPomodorosDoneInDay()} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
