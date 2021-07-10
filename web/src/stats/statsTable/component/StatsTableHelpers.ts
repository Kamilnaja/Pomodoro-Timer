import { PomodorosDoneInDay } from '../../../../../types/statsInterfaces';
import { DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import { StatsTableComponentProps } from './StatsTableComponentProps';

/**
 * @param month - for example january = 0
 * @param year
 * @returns how many days given month
 */
const getDaysInMonth = (props: StatsTableComponentProps): number =>
  new Date(props.pageYear, props.pageMonth + 1, 0).getDate();

export const daysInMonthArray = (props: StatsTableComponentProps) => Array(getDaysInMonth(props));

export const getHoursFromMinutes = (minutes: number): number => Math.floor(minutes / 60);

export const getRemainingMinutes = (minutes: number): number => minutes % 60;

export const addOffsetToMinutes = (minutes: number): string =>
  String(minutes).length === 1 ? `0${minutes}` : `${minutes}`;

export const minutesToReadableTime = (minutes: number): string =>
  `${getHoursFromMinutes(minutes)}h ${addOffsetToMinutes(getRemainingMinutes(minutes))}m`;

export const parseDateToDay = (date: string) => new Date(date).getDate();

export const getDayOfMonth = (i: number, props: StatsTableComponentProps): number =>
  isDescending(props.settings.displayDirection) ? getDaysInMonth(props) - i : i + 1;

export const findPomodorosInDay = (day: number, props: StatsTableComponentProps): PomodorosDoneInDay =>
  props.pomodoros.find(v => isPomodoroMadeInGivenDay(v, day));

export const sortPomodoros = (props: StatsTableComponentProps): PomodorosDoneInDay[] =>
  isDescending(props.settings.displayDirection) ? [...props.pomodoros] : [...props.pomodoros.slice(0).reverse()];

export const isDescending = (displayDirection: DisplayDirection): boolean => displayDirection === DisplayDirection.DESC;

export const getPomodoros = (i: number, props: StatsTableComponentProps): number =>
  findPomodorosInDay(getDayOfMonth(i, props), props)?.count;

export const totalPomodorosInMonth = (props: StatsTableComponentProps) =>
  props.pomodoros.reduce((x, y) => x + Number(y.count), 0);

export const pomodorosToMinutes = (pomodoros: number): number => 25 * pomodoros;

export const totalPomodorosToTime = (props: StatsTableComponentProps) =>
  minutesToReadableTime(pomodorosToMinutes(totalPomodorosInMonth(props)));

const isPomodoroMadeInGivenDay = (v: PomodorosDoneInDay, day: number): boolean => parseDateToDay(v.date) === day;
