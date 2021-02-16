import React from 'react';
import { Button } from 'react-bootstrap';
import { CounterComponentProps } from './CounterComponentProps';
import { isAnyTimerRunning } from '../container/PomodoroCounterContainerHelpers';
import './counterComponent.scss';

export const CounterComponent = (props: CounterComponentProps) => {
  return (
    <>
      <span className="time text-light d-flex align-items-center">{props.time}</span>
      <Button variant="success" onClick={isAnyTimerRunning(props.state) ? props.pauseCounter : props.startCounter}>
        {isAnyTimerRunning(props.state) ? 'Stop timer' : 'Start timer'}
      </Button>
    </>
  );
};
