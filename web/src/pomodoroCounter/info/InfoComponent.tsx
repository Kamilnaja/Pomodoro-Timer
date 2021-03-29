import { ConnectedTodayStatsContainer } from '../../stats/todayStats/containers/TodayStatsContainer';
import { CounterState } from '../store/enums/CounterState';
import './info.scss';
import { InfoComponentProps } from './InfoComponentProps';

export const InfoComponent = (props: InfoComponentProps) => {
  return (
    <div className="info mt-4">
      {props.auth.isLoggedIn ? (
        <div className="text-white text-center">
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
