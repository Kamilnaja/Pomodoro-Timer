import React from 'react';
import { Button } from 'react-bootstrap';
import { initialConfig } from '../../shared/settings/initialConfig';
import { ModeButtonsComponentProps } from './ModeButtonsComponentProps';

export const ModeButtonsComponent = (props: ModeButtonsComponentProps) => {
  return (
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
  );
};
