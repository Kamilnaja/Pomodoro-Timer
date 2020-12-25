import React from "react";
import { Time } from "../components/Time/Time";
import { initialState } from "./initialState";
import { State } from "./state";
import "./style.scss";

class Timer extends React.Component<{}, State> {
  interval: any;
  refreshRate = 100;
  pomodoroTime = 25 * 60 * 1000;
  shortBreakTime = 5 * 60 * 1000;
  longBreakTime = 15 * 60 * 1000;

  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  start = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.count();
    }
  };

  stop = () => {
    if (this.state.isRunning) {
      this.setState({ isRunning: false });
    }
    this.clearIntervalAndSetTime();
  };

  clickPomodoro = () => {
    this.clearIntervalAndSetTime(this.pomodoroTime);
  };

  clickShortBreak = () => {
    this.clearIntervalAndSetTime(this.shortBreakTime);
  };

  clickLongBreak = () => {
    this.clearIntervalAndSetTime(this.longBreakTime);
  };

  clearIntervalAndSetTime = (time?: number) => {
    clearInterval(this.interval);
    if (time) {
      this.setState({ time });
    }
    this.setState({ isRunning: false });
  };

  count = () => {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time - this.refreshRate });
    }, this.refreshRate);
  };

  render() {
    return (
      <div className="timer">
        <div className="timer__button-wrapper">
          <button
            className={
              "timer__button timer__button--mode " +
              (this.state.isRunning ? "timer__button--dimmed" : "")
            }
            onClick={this.clickPomodoro}
          >
            Pomodoro
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={this.clickShortBreak}
          >
            Short Break
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={this.clickLongBreak}
          >
            Long Break
          </button>
        </div>
        <Time time={this.state.time}></Time>
        <button
          className="timer__button timer__button--stop"
          onClick={!this.state.isRunning ? this.start : this.stop}
        >
          {!this.state.isRunning ? "start" : "stop"}
        </button>
      </div>
    );
  }
}

export default Timer;
