import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import { createDisplayDirection } from '../../../settings/testing/settings.test.data';
import { createPomodorosDoneInDay } from '../../testing/stats.test.data';
import { StatsTableContainerProps } from '../container/StatsTableContainerProps';
import { daysInMonth, StatsTableComponent } from './StatsTableComponent';

describe('StatsTableComponent', () => {
  const pomodoros = createPomodorosDoneInDay();
  const pageMonth = 1;
  const pageYear = 2020;
  const displayDirection = createDisplayDirection();
  const toggleDisplayDirection = () => {};
  const wrapper = shallow(
    <StatsTableComponent
      pageYear={pageYear}
      pageMonth={pageMonth}
      toggleDisplayDirection={toggleDisplayDirection}
      pomodoros={pomodoros}
      displayDirection={displayDirection}
    />,
  );

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it.each([
    [0, 2020, 31],
    [1, 2020, 29],
    [2, 2020, 31],
    [6, 2018, 31],
    [1, 2021, 28],
  ])('daysInMonth should return correct number of days for month: %s, year: %s : %s', (month, year, numberOfDays) => {
    expect(daysInMonth({ pageMonth: month, pageYear: year } as any)).toBe(numberOfDays);
  });
});
