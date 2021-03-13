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

export const pomodorosArray = (props: StatsTableComponentProps): PomodorosDoneInDay[] => {
  return props.settings.displayDirection === DisplayDirection.DESC
    ? props.pomodoros
    : props.pomodoros.slice(0).reverse();
};

export const StatsTableComponent = (props: StatsTableComponentProps) => {
  const longArr = (
    <>
      {Array.from(Array(daysInMonth(props)), (e, i) => (
        <tr key={i}>
          <td className="table__date">{getPomodoroEntryAtIndex(i, props)}</td>
          <td className="table__count">{findPomodorosInDay(getPomodoroEntryAtIndex(i, props), props)?.count}</td>
        </tr>
      ))}
    </>
  );

  const shortArr = (
    <>
      {pomodorosArray(props).map((v, idx) => (
        <tr key={idx}>
          <td className="table__date">{parseDateToDay(v.date)}</td>
          <td className="table__count">{v.count}</td>
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
            Day <Button onClick={() => props.toggleDisplayDirection()}>toggle sort</Button>
          </th>
          <th>Number of pomodoros</th>
        </tr>
      </thead>
      <tbody>{props.settings.displayEmptyDays ? longArr : shortArr}</tbody>
    </Table>
  );
};
