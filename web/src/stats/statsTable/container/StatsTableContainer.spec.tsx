import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createPomodorosDoneInDay } from '../../testing/stats.test.data';
import StatsTableContainer from './StatsTableContainer';

describe('StatsTableContainer', () => {
  let wrapper = shallow(
    <StatsTableContainer
      pageMonth={11}
      pageYear={2020}
      pomodoros={createPomodorosDoneInDay()}
      toggleDisplayDirection={() => {}}
    />,
  );

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
