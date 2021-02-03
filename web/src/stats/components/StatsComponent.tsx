import { getCurrentMonth, getCurrentYear } from '../../shared/scripts/utils';
import { StatsComponentProps } from '../store/interfaces/statsInterfaces';
import './stats.component.scss';

let pageMonth = getCurrentMonth();
let pageYear = getCurrentYear();

export const StatsComponent = (results: StatsComponentProps) => {
  const lastResult = results.stats[0];
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

    results.handleGetStats(pageYear, pageMonth);
  };

  const getNextMonth = (): void => {
    if (pageMonth === 11) {
      pageMonth = 0;
      pageYear = pageYear + 1;
    } else {
      pageMonth = pageMonth + 1;
    }

    results.handleGetStats(pageYear, pageMonth);
  };

  const shouldShowNextMonth = (): boolean => {
    return getCurrentYear() <= pageYear && getCurrentMonth() <= pageMonth;
  };

  return (
    <div className="stats">
      <h2 className="stats__today-result">
        Today you have made: {isAnyPomodoroDoneToday() ? lastResult?.count : 0} pomodoros
      </h2>
      <div className="stats__navigation navigation">
        <button className="navigation__arrow" onClick={() => getPreviousMonth()}>
          &lt; prev
        </button>
        <button className="navigation__arrow" onClick={() => getNextMonth()} disabled={shouldShowNextMonth()}>
          next &gt;
        </button>
      </div>
      <table className="stats__table table">
        <caption>
          Results from: {pageMonth + 1}.{pageYear}
        </caption>
        <thead className="table__head">
          <tr>
            <th>Date</th>
            <th>Number of pomodoros</th>
          </tr>
        </thead>
        <tbody>
          {results.stats?.map((v, idx) => (
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
