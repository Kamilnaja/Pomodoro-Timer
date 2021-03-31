import { isDayCorrect } from './service.util';

it.each([
  ['31', true],
  ['32', false],
  ['0', false],
  ['dupa', false],
])('day %p should be correct %s', (day, isCorrect) => {
  expect(isDayCorrect(day)).toBe(isCorrect);
});
