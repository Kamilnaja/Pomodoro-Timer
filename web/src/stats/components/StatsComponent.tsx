import StatsSearchResult from "../../../../types/statistics.interfaces";
import "./stats.component.scss";

type StatsProps = {
  stats: StatsSearchResult;
};

export const StatsComponent = (props: { stats: StatsProps }) => {
  return (
    <div className="stats">
      <h3>Today you have made: {props.stats.stats?.result[0]?.count} pomodoros</h3>
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
