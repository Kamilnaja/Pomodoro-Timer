import React from 'react';
import { Button } from 'react-bootstrap';
import { CounterComponentProps } from './CounterComponentProps';
import { TimeComponent } from '../time/TimeComponent';
import { isAnyTimerRunning } from '../container/PomodoroCounterContainerHelpers';

export const CounterComponent = (props: CounterComponentProps) => {
  return (
    <>
      <TimeComponent time={props.time} />
      <Button variant="success" onClick={isAnyTimerRunning(props.state) ? props.pauseCounter : props.startCounter}>
        {isAnyTimerRunning(props.state) ? 'Stop timer' : 'Start timer'}
      </Button>
    </>
  );
};
