import React from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { PomodorosDoneInDay } from '../../../../../types/statisticsInterfaces';
import { StatsTableComponentProps } from './StatsTableComponentProps';
import './StatsTableComponent.scss';

export const StatsTableComponent = (props: StatsTableComponentProps) => {
  const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();

  const daysInCurrentMonth = () => daysInMonth(props.pageMonth + 1, props.pageYear);

  const findPomodorosInDay = (day: number): PomodorosDoneInDay =>
    props.pomodoros.find(v => new Date(v.date).getDate() === day);

  const getIndex = (i: number) => (props.sortDirection === 'DESC' ? daysInCurrentMonth() - i : i + 1);

  const longArr = (
    <>
      {Array.from(Array(daysInCurrentMonth()), (e, i) => (
        <tr key={i}>
          <td className="table__date">{getIndex(i)}</td>
          <td className="table__count">{findPomodorosInDay(getIndex(i))?.count}</td>
        </tr>
      ))}
    </>
  );

  const shortArr = (
    <>
      {props.pomodoros?.map((v, idx) => (
        <tr key={idx}>
          <td className="table__date">{v.date}</td>
          <td className="table__count">{v.count}</td>
        </tr>
      ))}
    </>
  );

  return (
    <Table className="stats__table table">
      <caption className="table__caption caption">
        <h2 className="caption__header">
          Results from: {props.pageMonth + 1}.{props.pageYear}
        </h2>

        <ButtonGroup size="sm">
          <Button onClick={() => props.toggleDisplayDirection()}>Toogle sort direction</Button>
          <Button>Show empty days</Button>
        </ButtonGroup>
      </caption>
      <thead className="table__head">
        <tr>
          <th>Day</th>
          <th>Number of pomodoros</th>
        </tr>
      </thead>
      <tbody>{longArr}</tbody>
    </Table>
  );
};
