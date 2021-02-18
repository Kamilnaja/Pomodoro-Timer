import React from 'react';
import { Button } from 'react-bootstrap';
import { initialConfig } from '../../shared/settings/initialConfig';
import { ModeButtonsComponentProps } from './ModeButtonsComponentProps';

export const ModeButtonsComponent = (props: ModeButtonsComponentProps) => {
  return (
    <div className="d-flex justify-content-around w-100">
      <Button variant="primary" onClick={() => props.setModePomodoro()}>
        Pomodoro
      </Button>
      <Button variant="primary" onClick={() => props.setModeLongBreak(initialConfig.shortBreakTime)}>
        Short Break
      </Button>
      <Button variant="primary" onClick={() => props.setModeShortBreak(initialConfig.longBreakTime)}>
        Long Break
      </Button>
    </div>
  );
};
