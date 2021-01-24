import StatsSearchResult from "../../../../types/statistics.interfaces";
import "./stats.component.scss";

type StatsProps = {
  stats: StatsSearchResult;
};

export const StatsComponent = (props: { stats: StatsProps }) => {
  return (
    <div className="stats">
      <p>Today you have made: {props.stats.stats?.result[0]?.count} pomodoros</p>
    </div>
  );
};
