import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { msToTime } from '../../shared/scripts/utils';
import { initialConfig } from '../../shared/settings/initialConfig';
import { TabTitle } from '../../shared/title/TabTitle';
import {
  isAnyTimerRunning,
  playClickSound,
  isPomodoroMode,
} from '../pomodoroCounterScreen/PomodoroCounterScreenHelpers';
import { end, pause, run, updateCounter } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import './counterContainer.scss';
import { CounterComponentProps } from './CounterContainerProps';
import { worker } from './Worker';

class CounterContainer extends React.Component<CounterComponentProps> {
  private tabTitle = new TabTitle();
  private worker: Worker = worker;

  componentDidMount() {
    this.initializeWorker();
  }

  handlePauseCounter = () => {
    this.props.pause();
    this.setWorkerTime();
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
    this.setWorkerTime(initialConfig.pomodoroTime);
    this.props.end();
  };

  handleStartNewBreak = (time: number) => {
    this.setWorkerTime(time);
    this.props.end();
  };

  handlePomodoroEnd = () => {
    this.props.handleSavePomodoro();
  };

  private setWorkerTime = (time: number = 0) => {
    this.worker.postMessage({
      type: 'SET_TIME',
      payload: time,
    });
  };

  private initializeWorker() {
    if (typeof Worker !== 'undefined')
      this.worker.onmessage = e => {
        const { data } = e;
        if (data.isRunning) {
          const { time } = data;
          this.tabTitle.setTitle = `${msToTime(time)}`;
          this.props.updateCounter(time);
        } else {
          this.tabTitle.startBlinking();

          if (isPomodoroMode(this.props.counter.currentTimer)) {
            this.props.handleSavePomodoro();
            this.setWorkerTime(initialConfig.shortBreakTime);
          } else {
            console.log('break end!');
          }
        }
      };
  }

  render() {
    return (
      <>
        <p className="time text-light d-flex align-items-center">{msToTime(this.props.counter.counterTime)}</p>
        {isAnyTimerRunning(this.props.counter.counterState) ? (
          <Button variant="outline-primary" onClick={this.handlePauseCounter}>
            Pause timer
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
