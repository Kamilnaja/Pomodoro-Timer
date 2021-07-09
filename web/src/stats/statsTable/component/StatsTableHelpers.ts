import { PomodorosDoneInDay } from '../../../../../types/statsInterfaces';
import { DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import { StatsTableComponentProps } from './StatsTableComponentProps';

/**
 * @param month - for example january = 0
 * @param year
 * @returns how many days given month
 */
const daysInMonth = (props: StatsTableComponentProps): number =>
  new Date(props.pageYear, props.pageMonth + 1, 0).getDate();

export const daysInMonthArray = (props: StatsTableComponentProps) => Array(daysInMonth(props));

export const getHoursFromMinutes = (minutes: number): number => Math.floor(minutes / 60);

export const getRemainingMinutes = (minutes: number): number => minutes % 60;

export const addOffsetToNumber = (minutes: number): string =>
  String(minutes).length === 1 ? `0${minutes}` : `${minutes}`;

export const convertPomodorosToTime = (pomodoros: number): string => {
  const timeInMinutes = pomodoros * 25;
  const hours = getHoursFromMinutes(timeInMinutes);
  const minutes = getRemainingMinutes(timeInMinutes);

  return `${hours}h ${addOffsetToNumber(minutes)}m`;
};

export const parseDateToDay = (date: string) => new Date(date).getDate();

export const getDayOfMonth = (i: number, props: StatsTableComponentProps): number =>
  isDescending(props.settings.displayDirection) ? daysInMonth(props) - i : i + 1;

export const findPomodorosInDay = (day: number, props: StatsTableComponentProps): PomodorosDoneInDay =>
  props.pomodoros.find(v => new Date(v.date).getDate() === day);

export const pomodorosArray = (props: StatsTableComponentProps): PomodorosDoneInDay[] =>
  isDescending(props.settings.displayDirection) ? [...props.pomodoros] : [...props.pomodoros.slice(0).reverse()];

export const isDescending = (displayDirection: DisplayDirection): boolean => displayDirection === DisplayDirection.DESC;

export const getPomodoros = (i: number, props: StatsTableComponentProps): number => {
  return findPomodorosInDay(getDayOfMonth(i, props), props)?.count;
};
