import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import './stats.component.scss';
import { StatsComponentProps } from './StatsComponentProps';

let pageMonth = getCurrentMonth();
let pageYear = getCurrentYear();

export const StatsComponent = (props: StatsComponentProps) => {
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

  // const renderLineChart = (
  //   <LineChart width={600} height={300} data={props.stats}>
  //     <Line type="monotone" dataKey="count" stroke="#8884d8" />
  //   </LineChart>
  // );

  return (
    <div className="stats">
      {/* {renderLineChart} */}
      <ButtonGroup className="stats__navigation navigation">
        <Button
          className="navigation__button"
          onClick={() => getPreviousMonth()}
          disabled={!props.stats.hasPreviousPeriod}
        >
          &lt; prev
        </Button>
        <Button className="navigation__button" onClick={() => getNextMonth()} disabled={!props.stats.hasNextPeriod}>
          next &gt;
        </Button>
      </ButtonGroup>
      <Table className="stats__table table">
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
          {props.stats.pomodoros?.map((v, idx) => (
            <tr key={idx}>
              <td className="table__date">{v.date}</td>
              <td className="table__count">{v.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
