import TodayStatsContainer from '../../stats/todayStats/containers/TodayStatsContainer';
import { CounterState } from '../store/enums/timerEnum';
import './info.scss';
import { InfoComponentProps } from './InfoComponentProps';

export const InfoComponent = (props: InfoComponentProps) => {
  let info = '';
  switch (props.currentState) {
    case CounterState.BREAK_END:
      info = 'Start new pomodoro';
      break;
    case CounterState.POMODORO_END:
      info = 'Start break';
      break;
    case CounterState.POMODORO_RUNNING:
      info = 'Hard work';
      break;
    case CounterState.BREAK_RUNNING:
      info = 'Do not work';
      break;
    case CounterState.POMODORO_PAUSE:
      info = 'Pomodoro paused';
      break;
    case CounterState.BREAK_PAUSE:
      info = 'Break pause';
      break;
  }
  return (
    <div className="info mt-4">
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
