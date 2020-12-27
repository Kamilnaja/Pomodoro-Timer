import { TimerState } from "../../store/enums/timer.enum";
import "./info.scss";

export function Info(props: { currentState: TimerState }) {
  let info = "";
  switch (props.currentState) {
    case TimerState.BREAK_END:
      info = "Start new pomodoro";
      break;
    case TimerState.POMODORO_END:
      info = "Start break";
      break;
    case TimerState.POMODORO_RUNNING:
      info = "Hard work";
      break;
    case TimerState.BREAK_RUNNING:
      info = "Do not work";
      break;
  }
  return <div className="info">{info}</div>;
}
