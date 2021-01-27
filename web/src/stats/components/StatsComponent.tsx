import StatsSearchResult from "../../../../types/statistics.interfaces";
import "./stats.component.scss";

type StatsProps = {
  stats: StatsSearchResult;
};

export const StatsComponent = (props: { stats: StatsProps }) => {
  const isLastPomodoroIsDoneToday = (): boolean => {
    // get last stats days and reverse to allow date comparition
    const reverseLastStatsDate: string = props.stats.stats?.result[0].date.split("-").reverse().join("-");
    return new Date(reverseLastStatsDate).toDateString() === new Date().toDateString();
  };

  return (
    <div className="stats">
      <h3>Today you have made: {isLastPomodoroIsDoneToday() ? props.stats.stats?.result[0]?.count : 0} pomodoros</h3>
      <table className="stats__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Number of pomodoros</th>
          </tr>
        </thead>
        <tbody>
          {props.stats.stats?.result.map((v, idx) => (
            <tr key={idx}>
              <td>{v.date}</td>
              <td>{v.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
