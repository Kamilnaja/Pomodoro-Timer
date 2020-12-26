import React from "react";
import { connect } from "react-redux";
import { initialState } from "../store/state/initialState";
import {
  getPomodorosThunk,
  savePomodoroThunk,
} from "../../main/store/thunk/main.thunk";
import { msToTime } from "../../shared/scripts/utils";
import { Counter } from "../components/counter/Counter";
import { Info } from "../components/info/Info";
import { Time } from "../components/time/Time";
import { TimerState } from "../store/enums/timer.enum";
import { State } from "../store/interfaces/state.interface";
import { TimerProps } from "../store/interfaces/timerProps.interface";
import "./timer.scss";

class Timer extends React.Component<TimerProps, State> {
  interval: any;
  refreshRate = 500;

  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.props.handleGetPomodoros();
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
    this.clearIntervalAndSetTime(this.state.pomodoroTime);
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
        timerTime: this.state.shortBreakTime,
        pomodorosInSession: this.state.pomodorosInSession + 1,
      });
      this.props.handleSavePomodoro();
    } else if (this.state.timerState === TimerState.BREAK_RUNNING) {
      this.setState({
        timerState: TimerState.BREAK_END,
        timerTime: this.state.pomodoroTime,
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
            onClick={() => this.startNewBreak(this.state.shortBreakTime)}
          >
            Short Break
          </button>
          <button
            className="timer__button timer__button--mode"
            onClick={() => this.startNewBreak(this.state.longBreakTime)}
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
        <Counter amount={this.state.pomodorosInSession}></Counter>
      </div>
    </main>
  );
}

const mapDispatchToProps = {
  handleSavePomodoro: savePomodoroThunk,
  handleGetPomodoros: getPomodorosThunk,
};

export default connect(null, mapDispatchToProps)(Timer);
