import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { msToTime } from '../../shared/scripts/utils';
import { TabTitle } from '../../shared/title/TabTitle';
import { updateCounter } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import { TimeComponent } from '../time/TimeComponent';
import { CounterComponentProps } from './CounterContainerProps';
import { CounterState } from '../store/enums/CounterState';
import { isAnyTimerRunning, playClickSound, playEndSound } from '../container/PomodoroCounterContainerHelpers';
import { initialConfig } from '../../shared/settings/initialConfig';
import { pause, run, end } from '../store/actions/pomodoroCounterAction';

class CounterContainer extends React.Component<CounterComponentProps> {
  private tabTitle = new TabTitle();

  handlePauseCounter = () => {
    this.props.pause();
    this.clearIntervalAndSetTime();
  };

  handleStartCounter = () => {
    if (!isAnyTimerRunning(this.props.counter.counterState)) {
      this.tabTitle.stopBlinking();
      playClickSound();

      this.props.run();

      this.worker.postMessage({
        type: 'START',
        payload: this.props.counter.counterTime,
      });
    }
  };

  handleStartNewPomodoro = () => {
    this.clearIntervalAndSetTime(initialConfig.pomodoroTime);
    this.props.end();
  };

  handleStartNewBreak = (time: number) => {
    this.clearIntervalAndSetTime(time);
    this.props.end();
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

  // private stopCounting() {
  //   if (this.props.counter.counterState === CounterState.POMODORO_RUNNING) {
  //     this.props.pomodoroEnd();
  //     this.worker.postMessage({
  //       type: 'SET_TIME',
  //       payload: initialConfig.shortBreakTime,
  //     });
  //     this.props.handleSavePomodoro();
  //   } else if (this.props.counter.counterState === CounterState.BREAK_RUNNING) {
  //     this.props.breakEnd();
  //     this.worker.postMessage({
  //       type: 'SET_TIME',
  //       payload: initialConfig.pomodoroTime,
  //     });
  //   }
  //   this.clearIntervalAndSetTime(0);
  // }

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
        {this.props.counter.counterState === CounterState.RUNNING ? (
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
  pause,
  run,
  end,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
