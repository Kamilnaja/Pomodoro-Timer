import React from "react";
import { connect } from "react-redux";
import { msToTime } from "shared/scripts/utils";
import "shared/settings/initialConfig";
import { initialConfig } from "shared/settings/initialConfig";
import { savePomodoroAndReloadStats } from "../../main/store/actions/main.actions";
import { Info } from "../components/info/Info";
import { Time } from "../components/time/Time";
import { TimerState } from "../store/enums/timer.enum";
import { State } from "../store/interfaces/state.interface";
import { TimerProps } from "../store/interfaces/timerProps.interface";
import { timerState } from "../store/state/timerState";
import "./timer.scss";

class Timer extends React.Component<TimerProps, State> {
  interval = 0;
  blinkingInterval = 0;

  constructor(props: TimerProps) {
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
        document.title = `00.00.00`;
      }
      isTimeVisible = !isTimeVisible;
    }, 500);
  }

  private informUser() {
    const audio = new Audio("sounds/zapsplat_multimedia_game_sound_positive_award_bonus_bright_warm_synth_001_60698.mp3");
    audio.play();

    this.makeTitleBlinking();
  }

  private clickSound() {
    const audio = new Audio("sounds/zapsplat_multimedia_game_sound_childrens_ping_high_pitched_soft_007_60676.mp3");
    audio.play();
  }

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
      <div className={`timer ${this.isAnyTimerRunning() ? "timer--dimmed" : ""}`}>
        <div className="timer__button-wrapper">
          <button className={"timer__button"} onClick={this.startNewPomodoro}>
            Pomodoro
          </button>
          <button className="timer__button" onClick={() => this.startNewBreak(initialConfig.shortBreakTime)}>
            Short Break
          </button>
          <button className="timer__button" onClick={() => this.startNewBreak(initialConfig.longBreakTime)}>
            Long Break
          </button>
        </div>
        <Time time={msToTime(this.state.timerTime)} />
        <button className="timer__button timer__button--stop" onClick={this.isAnyTimerRunning() ? this.pauseCounter : this.startCounter}>
          {this.isAnyTimerRunning() ? "stop" : "start"}
        </button>
        <Info currentState={this.state.timerState} />
      </div>
    </main>
  );
}

const mapDispatchToProps = {
  handleSavePomodoro: savePomodoroAndReloadStats,
};

export default connect(null, mapDispatchToProps)(Timer);
