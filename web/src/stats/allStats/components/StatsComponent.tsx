import { Button, ButtonGroup } from 'react-bootstrap';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import './stats.component.scss';
import { StatsComponentProps } from './StatsComponentProps';
import StatsTableContainer from '../../statsTable/container/StatsTableContainer';

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

      <StatsTableContainer
        pageMonth={pageMonth}
        pageYear={pageYear}
        pomodoros={props.stats.pomodoros}
        handleGetSettings={props.handleGetSettings}
        handleSaveSettings={props.handleSaveSettings}
        settingsState={props.settings}
        toggleDisplayDirection={props.toggleDisplayDirection}
      ></StatsTableContainer>
    </div>
  );
};
