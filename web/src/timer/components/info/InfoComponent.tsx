import { TimerState } from '../../store/enums/timerEnum';
import './info.scss';

export const InfoComponent = (props: { currentState: TimerState }) => {
  let info = '';
  switch (props.currentState) {
    case TimerState.BREAK_END:
      info = 'Start new pomodoro';
      break;
    case TimerState.POMODORO_END:
      info = 'Start break';
      break;
    case TimerState.POMODORO_RUNNING:
      info = 'Hard work';
      break;
    case TimerState.BREAK_RUNNING:
      info = 'Do not work';
      break;
    case TimerState.POMODORO_PAUSE:
      info = 'Pomodoro paused';
      break;
    case TimerState.BREAK_PAUSE:
      info = 'Break pause';
      break;
  }
  return (
    <div className="info">
      <hr className="text-white" />
      <span className="text-white text-center">{info}</span>
    </div>
  );
};
