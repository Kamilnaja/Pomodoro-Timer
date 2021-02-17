import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { msToTime } from 'shared/scripts/utils';
import 'shared/settings/initialConfig';
import { initialConfig } from 'shared/settings/initialConfig';
import { AuthState } from '../../auth/store/interfaces/authState';
import { handleSavePomodoro } from '../../stats/store/actions/statsActions';
import { InfoComponent } from '../info/InfoComponent';
import { CounterState } from '../store/enums/timerEnum';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import { timerState } from '../store/state/timerState';
import { TabTitle } from '../../shared/title/TabTitle';
import { isAnyTimerRunning, playClickSound, playEndSound } from './PomodoroCounterContainerHelpers';
import { PomodoroCounterContainerProps } from './PomodoroCounterContainerProps';
import { ModeButtonsComponent } from '../modeButtons/ModeButtonsComponent';
import {
  pomodoroRun,
  breakRun,
  pomodoroPause,
  breakPause,
  breakEnd,
  pomodoroEnd,
} from '../store/actions/pomodoroCounterAction';
import CounterContainer from '../counter/CounterContainer';

class PomodoroCounterContainer extends React.Component<PomodoroCounterContainerProps, { timerTime: number }> {
  interval = 0;
  private tabTitle = new TabTitle();

  constructor(props: PomodoroCounterContainerProps) {
    super(props);
    this.state = timerState;
  }

  handleStartCounter = () => {
    if (!isAnyTimerRunning(this.props.pomodoroCounter)) {
      this.tabTitle.stopBlinking();
      playClickSound();

      switch (this.props.pomodoroCounter.counterState) {
        case CounterState.BREAK_END:
        case CounterState.POMODORO_PAUSE:
          this.props.pomodoroRun();
          break;
        case CounterState.POMODORO_END:
        case CounterState.BREAK_PAUSE:
          this.props.breakRun();
          break;
      }
      this.count();
    }
  };

  handlePauseCounter = () => {
    switch (this.props.pomodoroCounter.counterState) {
      case CounterState.POMODORO_RUNNING:
        this.props.pomodoroPause();
        break;
      case CounterState.BREAK_RUNNING:
        this.props.breakPause();
        break;
    }
    this.clearIntervalAndSetTime();
  };

  handleStartNewPomodoro = () => {
    this.clearIntervalAndSetTime(initialConfig.pomodoroTime);
    this.props.breakEnd();
  };

  handleStartNewBreak = (time: number) => {
    this.clearIntervalAndSetTime(time);
    this.props.pomodoroEnd();
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
        this.tabTitle.setTitle = `${msToTime(this.state.timerTime)}`;
      } else {
        this.stopCounting();
        this.informUser();
      }
    }, initialConfig.refreshRate);
  };

  private informUser() {
    playEndSound();
    this.tabTitle.startBlinking();
  }

  private stopCounting() {
    if (this.props.pomodoroCounter.counterState === CounterState.POMODORO_RUNNING) {
      this.props.pomodoroEnd();
      this.setState({
        timerTime: initialConfig.shortBreakTime,
      });
      this.props.handleSavePomodoro();
    } else if (this.props.pomodoroCounter.counterState === CounterState.BREAK_RUNNING) {
      this.props.breakEnd();
      this.setState({
        timerTime: initialConfig.pomodoroTime,
      });
    }
    this.clearIntervalAndSetTime(0);
  }

  render = () => (
    <Jumbotron className="align-items-center d-flex flex-column bg-dark">
      <ModeButtonsComponent startNewPomodoro={this.handleStartNewPomodoro} startNewBreak={this.handleStartNewBreak} />
      <CounterContainer
        pauseCounter={this.handlePauseCounter}
        startCounter={this.handleStartCounter}
      ></CounterContainer>
      <InfoComponent currentState={this.props.pomodoroCounter.counterState} auth={this.props.auth} />
    </Jumbotron>
  );
}
const mapDispatchToProps = {
  handleSavePomodoro,
  pomodoroRun,
  breakRun,
  pomodoroPause,
  breakPause,
  breakEnd,
  pomodoroEnd,
};

const mapStateToProps = (state: { auth: AuthState; pomodoroCounter: PomodoroCounterState }) => {
  const { auth, pomodoroCounter } = state;
  return { auth, pomodoroCounter };
};

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCounterContainer);
