import TodayStatsContainer from '../../stats/todayStats/containers/TodayStatsContainer';
import { TimerState } from '../state/enums/timerEnum';
import './info.scss';
import { InfoComponentProps } from './InfoComponentProps';

export const InfoComponent = (props: InfoComponentProps) => {
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
      {props.authState.isLoggedIn ? (
        <div className="text-white text-center">
          <span>{info}</span>
          <TodayStatsContainer />
        </div>
      ) : (
        <div className="text-danger text-center">
          <span>Please login to save pomodoros</span>
        </div>
      )}
    </div>
  );
};
