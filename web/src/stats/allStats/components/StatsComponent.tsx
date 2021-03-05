import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import './stats.component.scss';
import { StatsComponentProps } from './StatsComponentProps';
import StatsTableContainer from '../../statsTable/container/StatsTableContainer';

let pageMonth = getCurrentMonth();
let pageYear = getCurrentYear();

export const getPreviousMonth = (props: StatsComponentProps, year: number, month: number) => {
  if (month === 0) {
    month = 11;
    year = year - 1;
  } else {
    month = month - 1;
  }
  props.handleGetStats(year, month);
};

const getNextMonth = (props: StatsComponentProps): void => {
  if (pageMonth === 11) {
    pageMonth = 0;
    pageYear = pageYear + 1;
  } else {
    pageMonth = pageMonth + 1;
  }
  props.handleGetStats(pageYear, pageMonth);
};

export const StatsComponent = (props: StatsComponentProps) => {
  return (
    <Container>
      <h2>Statistics</h2>
      <div className="stats">
        {/* {renderLineChart} */}
        <ButtonGroup className="stats__navigation navigation">
          <Button
            className="navigation__button"
            onClick={() => getPreviousMonth(props, pageYear, pageMonth)}
            disabled={!props.stats.hasPreviousPeriod}
          >
            &lt; prev
          </Button>
          <Button
            className="navigation__button"
            onClick={() => getNextMonth(props)}
            disabled={!props.stats.hasNextPeriod}
          >
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
          toggleDisplayEmptyDays={props.toggleDisplayEmptyDays}
        ></StatsTableContainer>
      </div>
    </Container>
  );
};
