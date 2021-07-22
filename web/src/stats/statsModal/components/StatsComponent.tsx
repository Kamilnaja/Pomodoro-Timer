import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { StatsTableContainer } from '../../statsTable/container/StatsTableContainer';
import './stats.component.scss';
import { StatsComponentProps } from './StatsComponentProps';

export const StatsComponent = (props: StatsComponentProps) => {
  return (
    <Container>
      <div className="stats">
        <ButtonGroup className="stats__navigation navigation">
          <Button
            className="navigation__button navigation__button--prev"
            onClick={() => props.decrementMonth()}
            disabled={!props.stats.hasPreviousPeriod}
          >
            &lt; prev
          </Button>
          <Button
            className="navigation__button navigation__button--next"
            onClick={() => props.incrementMonth()}
            disabled={!props.stats.hasNextPeriod}
          >
            next &gt;
          </Button>
        </ButtonGroup>

        <StatsTableContainer
          pageMonth={props.date.getMonth()}
          pageYear={props.date.getFullYear()}
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
