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
import { initialConfig } from 'shared/settings/initialConfig';
import { worker } from '../counter/Worker';

class PomodoroCounterContainer extends React.Component<PomodoroCounterContainerProps> {
  private worker: Worker = worker;

  constructor(props: PomodoroCounterContainerProps) {
    super(props);
    this.state = timerState;
  }

  handleSetModePomodoro = () => {
    this.props.handleSetModePomodoro();
    worker.postMessage({
      type: 'SET_TIME',
      payload: initialConfig.pomodoroTime,
    });
  };

  handleSetModeLongBreak = () => {
    this.props.handleSetModeBreak(initialConfig.longBreakTime);
    worker.postMessage({
      type: 'SET_TIME',
      payload: initialConfig.longBreakTime,
    });
    // this.clearIntervalAndSetTime(time);
    // this.props.pomodoroEnd();
  };

  handleSetModeShortBreak = () => {
    this.props.handleSetModeBreak(initialConfig.shortBreakTime);
    worker.postMessage({
      type: 'SET_TIME',
      payload: initialConfig.shortBreakTime,
    });
    // this.clearIntervalAndSetTime(time);
    // this.props.pomodoroEnd();
  };

  handlePostTimer = () => {};

  render = () => (
    <Jumbotron className="align-items-center d-flex flex-column bg-dark">
      {/* // todo - set mode pomodoro, set mode break */}
      <ModeButtonsComponent
        setModePomodoro={this.handleSetModePomodoro}
        setModeLongBreak={this.handleSetModeLongBreak}
        setModeShortBreak={this.handleSetModeShortBreak}
      />
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
