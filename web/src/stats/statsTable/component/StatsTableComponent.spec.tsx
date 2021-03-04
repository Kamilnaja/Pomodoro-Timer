import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import { createSettings } from '../../../settings/testing/settings.test.data';
import { createPomodorosDoneInDay } from '../../testing/stats.test.data';
import { daysInMonth, findPomodorosInDay, getPomodoroEntryAtIndex, StatsTableComponent } from './StatsTableComponent';
import { StatsTableComponentProps } from './StatsTableComponentProps';

describe('StatsTableComponent', () => {
  const pomodoros = createPomodorosDoneInDay();
  const pageMonth = 1;
  const pageYear = 2020;
  const toggleDisplayDirection = () => {};
  const wrapper = shallow(
    <StatsTableComponent
      pageYear={pageYear}
      pageMonth={pageMonth}
      toggleDisplayDirection={toggleDisplayDirection}
      toggleDisplayEmptyDays={() => {}}
      pomodoros={pomodoros}
      settings={createSettings()}
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

  it.each([
    [
      10,
      {
        settings: { displayDirection: DisplayDirection.ASC },
        pageYear: 2020,
        pageMonth: 1,
      },
      11,
    ],
    [0, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 1 }, 1],
    [1, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 1 }, 2],
    [30, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 1 }, 31],
    [10, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 2 }, 11],
    [0, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 3 }, 1],
    [1, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 4 }, 2],
    [30, { settings: { displayDirection: DisplayDirection.ASC }, pageYear: 2020, pageMonth: 12 }, 31],
    [10, { settings: { displayDirection: DisplayDirection.DESC }, pageYear: 2020, pageMonth: 1 }, 19],
    [0, { settings: { displayDirection: DisplayDirection.DESC }, pageYear: 2020, pageMonth: 1 }, 29],
    [1, { settings: { displayDirection: DisplayDirection.DESC }, pageYear: 2020, pageMonth: 1 }, 28],
    [28, { settings: { displayDirection: DisplayDirection.DESC }, pageYear: 2020, pageMonth: 1 }, 1],
  ])('should return index for day: %s for props: %o', (index, props, res) => {
    expect(getPomodoroEntryAtIndex(index, props as StatsTableComponentProps)).toBe(res);
  });

  it.each([
    [
      10,
      {
        settings: {
          displayDirection: DisplayDirection.ASC,
        },
        pageYear: 2020,
        pageMonth: 1,
        pomodoros: [
          {
            date: '2020-01-10',
            count: 10,
          },
        ],
      },
      10,
    ],
    [
      0,
      {
        settings: {
          displayDirection: DisplayDirection.ASC,
        },
        pageYear: 2020,
        pageMonth: 1,
        pomodoros: [],
      },
      undefined,
    ],
    [
      21,
      {
        settings: {
          displayDirection: DisplayDirection.ASC,
        },
        pageYear: 2020,
        pageMonth: 1,
        pomodoros: [
          {
            date: '2020-01-20',
            count: 10,
          },
          {
            date: '2020-01-21',
            count: 3,
          },
        ],
      },
      3,
    ],
    [
      30,
      {
        settings: {
          displayDirection: DisplayDirection.ASC,
        },
        pageYear: 2020,
        pageMonth: 1,
        pomodoros: [
          {
            date: '2020-01-30',
            count: 30,
          },
        ],
      },
      30,
    ],
  ])('should return find number of pomodoros for index: %s, props: %o, result: %s', (index, props, count) => {
    expect(findPomodorosInDay(index, props as StatsTableComponentProps)?.count).toBe(count);
  });
});
