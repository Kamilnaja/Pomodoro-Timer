import React from "react";
import "./style.scss";
import { State } from "./state";
import { Time } from "../components/Time/Time";
import { initialState } from "./initialState";

class Timer extends React.Component<{}, State> {
  interval: any;
  refreshRate = 100;

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
    clearInterval(this.interval);
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
          >
            Pomodoro
          </button>
          <button className="timer__button timer__button--mode">
            Short Break
          </button>
          <button className="timer__button timer__button--mode">
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
