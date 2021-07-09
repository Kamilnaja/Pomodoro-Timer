import React from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { PomodorosDoneInDay } from '../../../../../types/statsInterfaces';
import { DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import './StatsTableComponent.scss';
import { StatsTableComponentProps } from './StatsTableComponentProps';
/**
 * @param month - for example january = 0
 * @param year
 */
export const daysInMonth = (props: StatsTableComponentProps): number =>
  new Date(props.pageYear, props.pageMonth + 1, 0).getDate();

export const getPomodoroEntryAtIndex = (i: number, props: StatsTableComponentProps) =>
  props.settings.displayDirection === 'DESC' ? daysInMonth(props) - i : i + 1;

export const findPomodorosInDay = (day: number, props: StatsTableComponentProps): PomodorosDoneInDay =>
  props.pomodoros.find(v => new Date(v.date).getDate() === day);

export const parseDateToDay = (date: string) => new Date(date).getDate();

export const pomodorosArray = (props: StatsTableComponentProps): PomodorosDoneInDay[] =>
  isDescending(props.settings.displayDirection) ? [...props.pomodoros] : [...props.pomodoros.slice(0).reverse()];

const isDescending = (displayDirection: DisplayDirection) => displayDirection === DisplayDirection.DESC;

const getPomodoros = (i: number, props: StatsTableComponentProps): number => {
  return findPomodorosInDay(getPomodoroEntryAtIndex(i, props), props)?.count;
};

const convertPomodorosToTime = (pomodoros: number): string => {
  const timeInMinutes = pomodoros * 25;
  const hours = getHoursFromMinutes(timeInMinutes);
  const minutes = getRemainingMinutes(timeInMinutes);

  return `${hours}h ${addOffsetToNumber(minutes)}m`;
};

const getHoursFromMinutes = (minutes: number): number => Math.floor(minutes / 60);

const getRemainingMinutes = (minutes: number): number => minutes % 60;

const addOffsetToNumber = (minutes: number): string => (String(minutes).length === 1 ? `0${minutes}` : `${minutes}`);

const getTimeTemplate = (i: number, props: StatsTableComponentProps) => (
  <td className="table__time">{getPomodoros(i, props) && convertPomodorosToTime(getPomodoros(i, props))}</td>
);

export const StatsTableComponent = (props: StatsTableComponentProps) => {
  const longArr = (
    <>
      {Array.from(Array(daysInMonth(props)), (e, i) => (
        <tr key={i}>
          <td className="table__date">{getPomodoroEntryAtIndex(i, props)}</td>
          <td className="table__count">{getPomodoros(i, props)}</td>
          {getTimeTemplate(i, props)}
        </tr>
      ))}
    </>
  );

  const shortArr = (
    <>
      {pomodorosArray(props).map((v, i) => (
        <tr key={i}>
          <td className="table__date">{parseDateToDay(v.date)}</td>
          <td className="table__count">{v.count}</td>
          {getTimeTemplate(i, props)}
        </tr>
      ))}
    </>
  );

  return (
    <Table striped bordered hover className="stats__table table" size="sm">
      <caption className="table__caption caption">
        <h2 className="caption__header">
          Results from: {props.pageMonth + 1}.{props.pageYear}
        </h2>
        <ButtonGroup size="sm">
          <Button onClick={() => props.toggleDisplayEmptyDays()}>
            Show {props.settings.displayEmptyDays ? 'non empty' : 'all'} days
          </Button>
        </ButtonGroup>
      </caption>
      <thead className="table__head">
        <tr>
          <th>
            <div className="table__head--day">
              Day
              <Button onClick={() => props.toggleDisplayDirection()} size="sm" className="table__head--btn">
                {isDescending(props.settings.displayDirection) ? '⇑⇓' : '⇓⇑'}
              </Button>
            </div>
          </th>
          <th>Number of pomodoros</th>
          <th>Amount of time</th>
        </tr>
      </thead>
      <tbody>{props.settings.displayEmptyDays ? longArr : shortArr}</tbody>
    </Table>
  );
};
