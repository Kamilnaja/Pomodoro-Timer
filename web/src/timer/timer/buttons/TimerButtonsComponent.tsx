import React from 'react';
import { Button } from 'react-bootstrap';
import { initialConfig } from '../../../shared/settings/initialConfig';
import { TimerButtonsComponentProps } from './TimerButtonsComponentProps';
import { TimeComponent } from '../../time/TimeComponent';

export const TimerButtonsComponent = (props: TimerButtonsComponentProps) => {
  return (
    <>
      <div className="d-flex justify-content-around w-100">
        <Button variant="primary" onClick={() => props.startNewPomodoro()}>
          Pomodoro
        </Button>
        <Button variant="primary" onClick={() => props.startNewBreak(initialConfig.shortBreakTime)}>
          Short Break
        </Button>
        <Button variant="primary" onClick={() => props.startNewBreak(initialConfig.longBreakTime)}>
          Long Break
        </Button>
      </div>
      <TimeComponent time={props.time} />
      <Button variant="success" onClick={props.isAnyTimerRunning() ? props.pauseCounter : props.startCounter}>
        {props.isAnyTimerRunning() ? 'Stop timer' : 'Start timer'}
      </Button>
    </>
  );
};
