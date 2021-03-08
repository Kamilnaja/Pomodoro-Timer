import { shouldShowNextPeriod, shouldShowPreviousPeriod } from './stats.service.helpers';

describe('shouldShowNextPeriod', () => {
  it.each([
    [new Date('2020-01-22'), 2018, 1, true],
    [new Date('2020-06-22'), 2020, 1, true],
    [new Date('2020-06-22'), 2020, 10, false],
    [new Date('2020-06-22'), 2020, 7, false],
    [new Date('2021-01-01'), 2020, 12, true],
  ])(
    'should show next period for date: %o, year: %s and month: %s',
    (givenDate, searchedYear, searchedMonth, result) => {
      expect(shouldShowNextPeriod(givenDate, searchedYear, searchedMonth)).toBe(result);
    },
  );
});

describe('shouldShowPreviousPeriod', () => {
  it.each([
    [new Date('2020-01-22'), 2018, 1, false],
    [new Date('2018-06-22'), 2020, 1, true],
    [new Date('2018-06-22'), 2018, 5, false],
    [new Date('2020-12-01'), 2021, 0, true],
    [new Date('2020-01-01'), 2019, 12, false],
    [new Date('2021-06-01'), 2021, 7, true],
    [new Date('2020-12-11'), 2021, 0, true],
  ])(
    'should show previous period for date created: %o, year: %s and month: %s',
    (dateCreated, searchedYear, searchedMonth, result) => {
      expect(shouldShowPreviousPeriod(dateCreated, searchedYear, searchedMonth)).toBe(result);
    },
  );
});
