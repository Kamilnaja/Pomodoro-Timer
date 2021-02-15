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
import { CounterComponent } from '../counter/CounterComponent';
import { TabTitle } from '../../shared/title/TabTitle';
import { isAnyTimerRunning, playClickSound, playEndSound } from './PomodoroCounterContainerHelpers';
import { PomodoroCounterContainerProps } from './PomodoroCounterContainerProps';
import { ModeButtonsComponent } from '../modeButtons/ModeButtonsComponent';

class PomodoroCounterContainer extends React.Component<PomodoroCounterContainerProps, PomodoroCounterState> {
  interval = 0;
  private tabTitle = new TabTitle();

  constructor(props: PomodoroCounterContainerProps) {
    super(props);
    this.state = timerState;
  }

  handleStartCounter = () => {
    if (!isAnyTimerRunning(this.state)) {
      this.tabTitle.stopBlinking();
      playClickSound();

      switch (this.state.counterState) {
        case CounterState.BREAK_END:
        case CounterState.POMODORO_PAUSE:
          this.setState({
            counterState: CounterState.POMODORO_RUNNING,
          });
          break;
        case CounterState.POMODORO_END:
        case CounterState.BREAK_PAUSE:
          this.setState({
            counterState: CounterState.BREAK_RUNNING,
          });
          break;
      }
      this.count();
    }
  };

  handlePauseCounter = () => {
    switch (this.state.counterState) {
      case CounterState.POMODORO_RUNNING:
        this.setState({
          counterState: CounterState.POMODORO_PAUSE,
        });
        break;
      case CounterState.BREAK_RUNNING:
        this.setState({
          counterState: CounterState.BREAK_PAUSE,
        });
        break;
    }
    this.clearIntervalAndSetTime();
  };

  handleStartNewPomodoro = () => {
    this.clearIntervalAndSetTime(initialConfig.pomodoroTime);
    this.setState({
      counterState: CounterState.BREAK_END,
    });
  };

  handleStartNewBreak = (time: number) => {
    this.clearIntervalAndSetTime(time);
    this.setState({
      counterState: CounterState.POMODORO_END,
    });
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
    if (this.state.counterState === CounterState.POMODORO_RUNNING) {
      this.setState({
        counterState: CounterState.POMODORO_END,
        timerTime: initialConfig.shortBreakTime,
      });
      this.props.handleSavePomodoro();
    } else if (this.state.counterState === CounterState.BREAK_RUNNING) {
      this.setState({
        counterState: CounterState.BREAK_END,
        timerTime: initialConfig.pomodoroTime,
      });
    }
    this.clearIntervalAndSetTime(0);
  }

  render = () => (
    <Jumbotron className="align-items-center d-flex flex-column bg-dark">
      <ModeButtonsComponent startNewPomodoro={this.handleStartNewPomodoro} startNewBreak={this.handleStartNewBreak} />
      <CounterComponent
        pauseCounter={this.handlePauseCounter}
        startCounter={this.handleStartCounter}
        time={msToTime(this.state.timerTime)}
        state={this.state}
      ></CounterComponent>
      <InfoComponent currentState={this.state.counterState} authState={this.props.authState} />
    </Jumbotron>
  );
}
const mapDispatchToProps = {
  handleSavePomodoro,
};

const mapStateToProps = (state: { auth: AuthState }) => {
  const authState = state.auth;
  return { authState };
};

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCounterContainer);
