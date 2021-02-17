import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { msToTime } from '../../shared/scripts/utils';
import { TabTitle } from '../../shared/title/TabTitle';
import { updateCounter } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import { TimeComponent } from '../time/TimeComponent';
import { CounterComponentProps } from './CounterContainerProps';
import {
  pomodoroRun,
  breakRun,
  pomodoroPause,
  breakPause,
  breakEnd,
  pomodoroEnd,
} from '../store/actions/pomodoroCounterAction';
import { CounterState } from '../store/enums/timerEnum';
import { isAnyTimerRunning, playClickSound, playEndSound } from '../container/PomodoroCounterContainerHelpers';
import { initialConfig } from '../../shared/settings/initialConfig';

class CounterContainer extends React.Component<CounterComponentProps> {
  private tabTitle = new TabTitle();

  handlePauseCounter = () => {
    switch (this.props.counter.counterState) {
      case CounterState.POMODORO_RUNNING:
        this.props.pomodoroPause();
        break;
      case CounterState.BREAK_RUNNING:
        this.props.breakPause();
        break;
    }
    this.clearIntervalAndSetTime();
  };

  handleStartCounter = () => {
    if (!isAnyTimerRunning(this.props.counter.counterState)) {
      this.tabTitle.stopBlinking();
      playClickSound();

      switch (this.props.counter.counterState) {
        case CounterState.BREAK_END:
        case CounterState.POMODORO_PAUSE:
          this.props.pomodoroRun();
          break;
        case CounterState.POMODORO_END:
        case CounterState.BREAK_PAUSE:
          this.props.breakRun();
          break;
      }
      this.worker.postMessage({
        type: 'START',
        payload: this.props.counter.counterTime,
      });
    }
  };

  handleStartNewPomodoro = () => {
    this.clearIntervalAndSetTime(initialConfig.pomodoroTime);
    this.props.breakEnd();
  };

  handleStartNewBreak = (time: number) => {
    this.clearIntervalAndSetTime(time);
    this.props.pomodoroEnd();
  };

  private clearIntervalAndSetTime = (time: number = 0) => {
    this.worker.postMessage({
      type: 'SET_TIME',
      payload: time,
    });
  };

  private informUser() {
    playEndSound();
    this.tabTitle.startBlinking();
  }

  private stopCounting() {
    if (this.props.counter.counterState === CounterState.POMODORO_RUNNING) {
      this.props.pomodoroEnd();
      this.worker.postMessage({
        type: 'SET_TIME',
        payload: initialConfig.shortBreakTime,
      });
      this.props.handleSavePomodoro();
    } else if (this.props.counter.counterState === CounterState.BREAK_RUNNING) {
      this.props.breakEnd();
      this.worker.postMessage({
        type: 'SET_TIME',
        payload: initialConfig.pomodoroTime,
      });
    }
    this.clearIntervalAndSetTime(0);
  }

  worker: Worker;
  componentDidMount() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('scripts/counter.js');
      this.worker.onmessage = e => {
        const { data } = e;
        if (data.isRunning) {
          const { time } = data;
          this.tabTitle.setTitle = `${msToTime(time)}`;
          this.props.updateCounter(time);
        } else {
          this.tabTitle.startBlinking();
        }
      };
    } else {
      console.log('Your browser do not allow to use web workers. Please use other browser');
    }
  }
  render() {
    return (
      <>
        <TimeComponent time={msToTime(this.props.counter.counterTime)} />
        {isAnyTimerRunning(this.props.counter.counterState) ? (
          <Button variant="secondary" onClick={this.handlePauseCounter}>
            Stop timer
          </Button>
        ) : (
          <Button variant="success" onClick={this.handleStartCounter}>
            Start timer
          </Button>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: { pomodoroCounter: PomodoroCounterState }) => {
  const { pomodoroCounter } = state;
  return { counter: pomodoroCounter };
};

const mapDispatchToProps = {
  updateCounter,
  pomodoroRun,
  breakRun,
  pomodoroPause,
  breakPause,
  breakEnd,
  pomodoroEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
