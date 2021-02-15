import React from 'react';
import { Button } from 'react-bootstrap';
import { initialConfig } from '../../../shared/settings/initialConfig';
import { TimerButtonsComponentProps } from './TimerButtonsComponentProps';
import { TimeComponent } from '../../time/TimeComponent';
import { isAnyTimerRunning } from '../../container/PomodoroCounterContainerHelpers';
// todo - rename to timer
export const TimerButtonsComponent = (props: TimerButtonsComponentProps) => {
  return (
    <>
      <TimeComponent time={props.time} />
      <Button variant="success" onClick={isAnyTimerRunning(props.state) ? props.pauseCounter : props.startCounter}>
        {isAnyTimerRunning(props.state) ? 'Stop timer' : 'Start timer'}
      </Button>
    </>
  );
};
