import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import 'shared/settings/initialConfig';
import { AuthState } from '../../auth/store/interfaces/authState';
import { handleSavePomodoro } from '../../stats/store/actions/statsActions';
import CounterContainer from '../counter/CounterContainer';
import { InfoComponent } from '../info/InfoComponent';
import { ModeButtonsComponent } from '../modeButtons/ModeButtonsComponent';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import { timerState } from '../store/state/timerState';
import { PomodoroCounterContainerProps } from './PomodoroCounterContainerProps';
import { handleSetModeBreak, handleSetModePomodoro } from '../store/actions/pomodoroCounterAction';

class PomodoroCounterContainer extends React.Component<PomodoroCounterContainerProps> {
  constructor(props: PomodoroCounterContainerProps) {
    super(props);
    this.state = timerState;
  }

  handleSetModePomodoro = () => {
    this.props.handleSetModePomodoro();
    // set timer in timer
    // this.clearIntervalAndSetTime(initialConfig.pomodoroTime);
    // this.props.breakEnd();
  };

  handleSetModeBreak = (time: number) => {
    this.props.handleSetModeBreak();
    // this.clearIntervalAndSetTime(time);
    // this.props.pomodoroEnd();
  };

  handlePostTimer = () => {};

  render = () => (
    <Jumbotron className="align-items-center d-flex flex-column bg-dark">
      {/* // todo - set mode pomodoro, set mode break */}
      <ModeButtonsComponent setModePomodoro={this.handleSetModePomodoro} setModeBreak={this.handleSetModeBreak} />
      <CounterContainer
        handlePostTimer={this.handlePostTimer}
        handleSavePomodoro={this.props.handleSavePomodoro}
      ></CounterContainer>
      <InfoComponent currentState={this.props.pomodoroCounter.counterState} auth={this.props.auth} />
    </Jumbotron>
  );
}
const mapDispatchToProps = {
  handleSavePomodoro,
  handleSetModePomodoro,
  handleSetModeBreak,
};

const mapStateToProps = (state: { auth: AuthState; pomodoroCounter: PomodoroCounterState }) => {
  const { auth, pomodoroCounter } = state;
  return { auth, pomodoroCounter };
};

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCounterContainer);
