import StatsSearchResult from "../../../../types/statistics.interfaces";
import "./stats.component.scss";

type StatsProps = {
  stats: StatsSearchResult;
};

export const StatsComponent = (props: { stats: StatsProps }) => {
  const lastResult = props.stats.stats?.result[0];
  const isLastPomodoroIsDoneToday = (): boolean => {
    // get last stats days and reverse to allow date comparition
    const reverseLastStatsDate: string = lastResult?.date.split("-").reverse().join("-");
    return new Date(reverseLastStatsDate).toDateString() === new Date().toDateString();
  };

  return (
    <div className="stats">
      <h3 className="stats__today-result">Today you have made: {isLastPomodoroIsDoneToday() ? lastResult?.count : 0} pomodoros</h3>
      <table className="stats__table table">
        <thead className="table__head">
          <tr>
            <th>Date</th>
            <th>Number of pomodoros</th>
          </tr>
        </thead>
        <tbody>
          {props.stats.stats?.result.map((v, idx) => (
            <tr key={idx}>
              <td className="table__date">{v.date}</td>
              <td className="table__count">{v.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
