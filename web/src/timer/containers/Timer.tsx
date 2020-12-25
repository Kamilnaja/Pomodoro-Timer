import React from "react";
import { Time } from "../components/Time/Time";
import { initialState } from "./initialState";
import { State } from "./state";
import "./style.scss";
import { TimerState } from "./timer.enum";

class Timer extends React.Component<{}, State> {
  interval: any;
  refreshRate = 100;

  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  startCounter = () => {
    if (!this.isAnyTimerRunning()) {
      this.setState({ timerState: TimerState.POMODORO_RUNNING });
      this.count();
    }
  };

  stop = () => {
    if (this.isAnyTimerRunning()) {
      this.setState({ timerState: TimerState.POMODORO_RUNNING });
    }
    this.clearIntervalAndSetTime();
  };

  clickNewPomodoro = () => {
    this.clearIntervalAndSetTime(this.state.pomodoroTime);
    this.setState({
      timerState: TimerState.POMODORO_RUNNING,
    });
  };

  clickNewShortBreak = () => {
    this.clearIntervalAndSetTime(this.state.shortBreakTime);
    this.setState({
      timerState: TimerState.BREAK_RUNNING,
    });
  };

  clickNewLongBreak = () => {
    this.clearIntervalAndSetTime(this.state.longBreakTime);
    this.setState({
      timerState: TimerState.BREAK_RUNNING,
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
      if (this.state.timerTime >= 0) {
        this.setState({
          timerTime: this.state.timerTime - this.refreshRate,
        });
      } else {
        this.stopCounting();
      }
    }, this.refreshRate);
  };

  private stopCounting() {
    if (this.state.timerState === TimerState.POMODORO_RUNNING) {
      this.setState({
        timerState: TimerState.POMODORO_END,
        timerTime: this.state.shortBreakTime, // should also choose is there is long break
      });
    } else if (this.state.timerState === TimerState.BREAK_RUNNING) {
      this.setState({
        timerState: TimerState.BREAK_END,
        timerTime: this.state.pomodoroTime,
      });
    }
    this.clearIntervalAndSetTime();
  }

  render() {
    return (
      <div className="timer">
        <div className="timer__button-wrapper">
          <button
            className={"timer__button timer__button--mode "}
            onClick={this.clickNewPomodoro}
          >
            Pomodoro
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={this.clickNewShortBreak}
          >
            Short Break
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={this.clickNewLongBreak}
          >
            Long Break
          </button>
        </div>
        <Time time={this.state.timerTime}></Time>
        <button
          className="timer__button timer__button--stop"
          onClick={this.isAnyTimerRunning() ? this.stop : this.startCounter}
        >
          {this.isAnyTimerRunning() ? "stop" : "start"}
        </button>
      </div>
    );
  }
}

export default Timer;
