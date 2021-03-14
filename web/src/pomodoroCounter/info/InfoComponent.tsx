import { ConnectedTodayStatsContainer } from '../../stats/todayStats/containers/TodayStatsContainer';
import { CounterState } from '../store/enums/CounterState';
import './info.scss';
import { InfoComponentProps } from './InfoComponentProps';

export const InfoComponent = (props: InfoComponentProps) => {
  let info = '';
  switch (props.currentState) {
    case CounterState.END:
      info = 'Select new pomodoro or break from blue buttons and start timer';
      break;
    case CounterState.RUNNING:
      info = 'Timer in progress';
      break;
    case CounterState.PAUSE:
      info = 'Timer paused';
      break;
  }
  return (
    <div className="info mt-4">
      {props.auth.isLoggedIn ? (
        <div className="text-white text-center">
          <span>{info}</span>
          <ConnectedTodayStatsContainer />
        </div>
      ) : (
        <div className="text-danger text-center">
          <span>Please login to save pomodoros</span>
        </div>
      )}
    </div>
  );
};
