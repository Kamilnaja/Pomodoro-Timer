import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import StatsTableContainer from '../../statsTable/container/StatsTableContainer';
import './stats.component.scss';
import { StatsComponentProps } from './StatsComponentProps';

let pageMonth = getCurrentMonth();
let pageYear = getCurrentYear();

export const StatsComponent = (props: StatsComponentProps) => {
  const handleChangeMonth = (isNext: boolean) => {
    const nextOrPreviousMonth = isNext ? 1 : -1;
    const dt = new Date(pageYear, pageMonth);
    dt.setMonth(dt.getMonth() + nextOrPreviousMonth);

    pageMonth = dt.getMonth();
    pageYear = dt.getFullYear();

    props.handleGetStats(dt.getFullYear(), dt.getMonth());
  };

  return (
    <Container>
      <div className="stats">
        {/* {renderLineChart} */}
        <ButtonGroup className="stats__navigation navigation">
          <Button
            className="navigation__button navigation__button--prev"
            onClick={() => handleChangeMonth(false)}
            disabled={!props.stats.hasPreviousPeriod}
          >
            &lt; prev
          </Button>
          <Button
            className="navigation__button navigation__button--next"
            onClick={() => handleChangeMonth(true)}
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
