import React from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import './StatsTableComponent.scss';
import { StatsTableComponentProps } from './StatsTableComponentProps';
import * as helpers from '../../helpers/statsHelpers';

export const getTimeTemplate = (numberOfPomodoros: number) => (
  <td className="table__time">
    {!!numberOfPomodoros && helpers.minutesToReadableTime(helpers.pomodorosToMinutes(numberOfPomodoros))}
  </td>
);

export const StatsTableComponent = (props: StatsTableComponentProps) => {
  const longArr = (
    <>
      {Array.from(helpers.daysInMonthArray(props), (_, i) => (
        <tr key={i}>
          <td className="table__date">{helpers.getDayOfMonth(i, props)}</td>
          <td className="table__count">{helpers.getPomodoros(i, props)}</td>
          {getTimeTemplate(helpers.getPomodoros(i, props))}
        </tr>
      ))}
    </>
  );

  const shortArr = (
    <>
      {helpers.sortPomodoros(props).map((v, i) => (
        <tr key={i}>
          <td className="table__date">{helpers.parseDateToDay(v.date)}</td>
          <td className="table__count">{v.count}</td>
          {getTimeTemplate(v.count)}
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
                {helpers.isDescending(props.settings.displayDirection) ? '⇑⇓' : '⇓⇑'}
              </Button>
            </div>
          </th>
          <th>Number of pomodoros</th>
          <th>Amount of time</th>
        </tr>
      </thead>
      <tbody>{props.settings.displayEmptyDays ? longArr : shortArr}</tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{helpers.totalPomodorosInMonth(props)}</td>
          <td>{helpers.totalPomodorosToTime(props)}</td>
        </tr>
      </tfoot>
    </Table>
  );
};
