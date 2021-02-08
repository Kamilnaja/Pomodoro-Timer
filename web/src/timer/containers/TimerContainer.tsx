import React from 'react';
import { connect } from 'react-redux';
import { msToTime } from 'shared/scripts/utils';
import 'shared/settings/initialConfig';
import { initialConfig } from 'shared/settings/initialConfig';
import { savePomodoroAndReloadStats } from '../../main/store/actions/mainActions';
import { TimerState } from '../store/enums/timerEnum';
import { State } from '../store/interfaces/stateInterface';
import { timerState } from '../store/state/timerState';
import './timer.scss';
import Button from 'react-bootstrap/Button';
import { Jumbotron } from 'react-bootstrap';
import { TimeComponent } from '../components/time/TimeComponent';
import { TimerContainerProps } from './timerContainerProps';
import { InfoComponent } from '../components/info/InfoComponent';

class TimerContainer extends React.Component<TimerContainerProps, State> {
  interval = 0;
  blinkingInterval = 0;

  constructor(props: TimerContainerProps) {
    super(props);
    this.state = timerState;
  }

  startCounter = () => {
    if (!this.isAnyTimerRunning()) {
      clearInterval(this.blinkingInterval);
      this.clickSound();

      switch (this.state.timerState) {
        case TimerState.BREAK_END:
          this.setState({ timerState: TimerState.POMODORO_RUNNING });
          break;
        case TimerState.POMODORO_END:
          this.setState({
            timerState: TimerState.BREAK_RUNNING,
          });
          break;
        case TimerState.POMODORO_PAUSE:
          this.setState({
            timerState: TimerState.POMODORO_RUNNING,
          });
          break;
        case TimerState.BREAK_PAUSE:
          this.setState({
            timerState: TimerState.BREAK_RUNNING,
          });
          break;
      }
      this.count();
    }
  };

  pauseCounter = () => {
    switch (this.state.timerState) {
      case TimerState.POMODORO_RUNNING:
        this.setState({
          timerState: TimerState.POMODORO_PAUSE,
        });
        break;
      case TimerState.BREAK_RUNNING:
        this.setState({
          timerState: TimerState.BREAK_PAUSE,
        });
        break;
    }
    this.clearIntervalAndSetTime();
  };

  startNewPomodoro = () => {
    this.clearIntervalAndSetTime(initialConfig.pomodoroTime);
    this.setState({
      timerState: TimerState.BREAK_END,
    });
  };

  startNewBreak = (time: number) => {
    this.clearIntervalAndSetTime(time);
    this.setState({
      timerState: TimerState.POMODORO_END,
    });
  };

  isAnyTimerRunning = () => {
    return this.state.timerState === TimerState.BREAK_RUNNING || this.state.timerState === TimerState.POMODORO_RUNNING;
  };

  private clearIntervalAndSetTime = (time?: number) => {
    clearInterval(this.interval);
    if (time) {
      this.setState({ timerTime: time });
    }
  };

  private count = () => {
    this.interval = window.setInterval(() => {
      if (this.state.timerTime !== 0) {
        this.setState({
          timerTime: this.state.timerTime - initialConfig.refreshRate,
        });
        document.title = `${msToTime(this.state.timerTime)}`;
      } else {
        this.stopCounting();
        this.informUser();
      }
    }, initialConfig.refreshRate);
  };

  private makeTitleBlinking() {
    let isTimeVisible = true;
    this.blinkingInterval = window.setInterval(() => {
      if (isTimeVisible) {
        document.title = `${msToTime(this.state.timerTime)}`;
      } else {
        document.title = `00.00`;
      }
      isTimeVisible = !isTimeVisible;
    }, 500);
  }

  private informUser() {
    const audio = new Audio(
      'sounds/zapsplat_multimedia_game_sound_positive_award_bonus_bright_warm_synth_001_60698.mp3',
    );
    audio.play();

    this.makeTitleBlinking();
  }

  private clickSound() {
    const audio = new Audio('sounds/zapsplat_multimedia_game_sound_childrens_ping_high_pitched_soft_007_60676.mp3');
    audio.play();
  }

  private stopCounting() {
    if (this.state.timerState === TimerState.POMODORO_RUNNING) {
      this.setState({
        timerState: TimerState.POMODORO_END,
        timerTime: initialConfig.shortBreakTime,
      });
      this.props.savePomodoroAndReloadStats();
    } else if (this.state.timerState === TimerState.BREAK_RUNNING) {
      this.setState({
        timerState: TimerState.BREAK_END,
        timerTime: initialConfig.pomodoroTime,
      });
    }
    this.clearIntervalAndSetTime(0);
  }

  render = () => (
    <Jumbotron className="align-items-center d-flex flex-column bg-dark">
      <div className="button-wrapper">
        <Button variant="primary" onClick={this.startNewPomodoro}>
          Pomodoro
        </Button>
        <Button variant="primary" onClick={() => this.startNewBreak(initialConfig.shortBreakTime)}>
          Short Break
        </Button>
        <Button variant="primary" onClick={() => this.startNewBreak(initialConfig.longBreakTime)}>
          Long Break
        </Button>
      </div>
      <TimeComponent time={msToTime(this.state.timerTime)} />
      <Button
        variant="primary"
        className="timer__button"
        onClick={this.isAnyTimerRunning() ? this.pauseCounter : this.startCounter}
      >
        {this.isAnyTimerRunning() ? 'Stop timer' : 'Start timer'}
      </Button>
      <InfoComponent currentState={this.state.timerState} />
    </Jumbotron>
  );
}

const mapDispatchToProps = {
  savePomodoroAndReloadStats,
};

export default connect(null, mapDispatchToProps)(TimerContainer);