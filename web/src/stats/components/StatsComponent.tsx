import StatsSearchResult from '../../../../types/statistics.interfaces';
import { getCurrentMonth, getCurrentYear } from '../../shared/scripts/utils';
import './stats.component.scss';

type StatsProps = {
  stats: StatsSearchResult;
};

let pageMonth = getCurrentMonth();
let pageYear = getCurrentYear();

export const StatsComponent = (props: { stats: StatsProps; handleGetStats: (year: number, month: number) => void }) => {
  const lastResult = props.stats.stats?.result[0];
  const isAnyPomodoroDoneToday = (): boolean => {
    // get last stats days and reverse to allow date comparition
    const reverseLastStatsDate: string = lastResult?.date.split('-').reverse().join('-');
    return new Date(reverseLastStatsDate).toDateString() === new Date().toDateString();
  };

  const getPreviousMonth = () => {
    if (pageMonth === 0) {
      pageMonth = 11;
      pageYear = pageYear - 1;
    } else {
      pageMonth = pageMonth - 1;
    }

    props.handleGetStats(pageYear, pageMonth);
  };

  const getNextMonth = (): void => {
    if (pageMonth === 11) {
      pageMonth = 0;
      pageYear = pageYear + 1;
    } else {
      pageMonth = pageMonth + 1;
    }

    props.handleGetStats(pageYear, pageMonth);
  };

  const shouldShowNextMonth = (): boolean => {
    return getCurrentYear() <= pageYear && getCurrentMonth() <= pageMonth;
  };

  return (
    <div className="stats">
      <h3 className="stats__today-result">
        Today you have made: {isAnyPomodoroDoneToday() ? lastResult?.count : 0} pomodoros
      </h3>
      <h3 className="stats__today-result">
        year: {pageYear} month: {pageMonth + 1}
      </h3>
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
      <div className="stats__navigation navigation">
        <button className="navigation__arrow" onClick={() => getPreviousMonth()}>
          &lt; prev
        </button>
        <button className="navigation__arrow" onClick={() => getNextMonth()} disabled={shouldShowNextMonth()}>
          next &gt;
        </button>
      </div>
    </div>
  );
};
