import React from "react";
import { connect } from "react-redux";
import { savePomodoroThunk } from "../../main/store/thunk/main.thunk";
import { msToTime } from "../../shared/scripts/utils";
import { Info } from "../components/info/Info";
import { Time } from "../components/time/Time";
import { TimerState } from "../store/enums/timer.enum";
import { State } from "../store/interfaces/state.interface";
import { TimerProps } from "../store/interfaces/timerProps.interface";
import { timerState } from "../store/state/timerState";
import "./timer.scss";
import "../../shared/settings/initialConfig";
import { initialConfig } from "../../shared/settings/initialConfig";

class Timer extends React.Component<TimerProps, State> {
  interval: any;

  constructor(props: any) {
    super(props);
    this.state = timerState;
  }

  componentDidUpdate = () => {
    document.title = `${msToTime(this.state.timerTime)}`;
  };

  startCounter = () => {
    if (this.state.timerState === TimerState.BREAK_END) {
      this.setState({ timerState: TimerState.POMODORO_RUNNING });
    } else if (this.state.timerState === TimerState.POMODORO_END) {
      this.setState({ timerState: TimerState.BREAK_RUNNING });
    }
    this.count();
  };

  stop = () => {
    if (this.isAnyTimerRunning()) {
      this.setState({ timerState: TimerState.POMODORO_RUNNING });
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
    return (
      this.state.timerState === TimerState.BREAK_RUNNING ||
      this.state.timerState === TimerState.POMODORO_RUNNING
    );
  };

  clearIntervalAndSetTime = (time?: number) => {
    clearInterval(this.interval);
    if (time) {
      this.setState({ timerTime: time });
    }
  };

  count = () => {
    this.interval = setInterval(() => {
      if (this.state.timerTime !== 0) {
        this.setState({
          timerTime: this.state.timerTime - initialConfig.refreshRate,
        });
      } else {
        this.stopCounting();
      }
    }, initialConfig.refreshRate);
  };

  private stopCounting() {
    if (this.state.timerState === TimerState.POMODORO_RUNNING) {
      this.setState({
        timerState: TimerState.POMODORO_END,
        timerTime: initialConfig.shortBreakTime,
      });
      this.props.handleSavePomodoro();
    } else if (this.state.timerState === TimerState.BREAK_RUNNING) {
      this.setState({
        timerState: TimerState.BREAK_END,
        timerTime: initialConfig.pomodoroTime,
      });
    }
    this.clearIntervalAndSetTime(0);
  }

  render = () => (
    <main>
      <div className="timer">
        <div className="timer__button-wrapper">
          <button
            className={"timer__button timer__button--mode "}
            onClick={this.startNewPomodoro}
          >
            Pomodoro
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={() => this.startNewBreak(initialConfig.shortBreakTime)}
          >
            Short Break
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={() => this.startNewBreak(initialConfig.longBreakTime)}
          >
            Long Break
          </button>
        </div>
        <Time time={msToTime(this.state.timerTime)}></Time>
        <button
          className="timer__button timer__button--stop"
          onClick={this.isAnyTimerRunning() ? this.stop : this.startCounter}
        >
          {this.isAnyTimerRunning() ? "stop" : "start"}
        </button>
        <Info currentState={this.state.timerState}></Info>
      </div>
    </main>
  );
}

const mapDispatchToProps = {
  handleSavePomodoro: savePomodoroThunk,
};

export default connect(null, mapDispatchToProps)(Timer);
