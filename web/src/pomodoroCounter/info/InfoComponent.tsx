import { ConnectedTodayStatsContainer } from '../../stats/todayStats/containers/TodayStatsContainer';
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
          <span className="text-white">Please login to save pomodoros</span>
        </div>
      )}
    </div>
  );
};
