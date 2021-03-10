import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import 'shared/settings/initialConfig';
import { initialConfig } from 'shared/settings/initialConfig';
import { AuthState } from '../../auth/store/interfaces/authState';
import { handleSavePomodoro } from '../../stats/store/actions/statsActions';
import TagContainer from '../../tag/container/TagContainer';
import CounterContainer from '../counter/CounterContainer';
import { worker } from '../counter/Worker';
import { InfoComponent } from '../info/InfoComponent';
import { ModeButtonsComponent } from '../modeButtons/ModeButtonsComponent';
import { handleSetModeBreak, handleSetModePomodoro } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import { timerState } from '../store/state/timerState';
import { PomodoroCounterScreenProps } from './PomodoroCounterScreenProps';

class PomodoroCounterScreen extends React.Component<PomodoroCounterScreenProps> {
  constructor(props: PomodoroCounterScreenProps) {
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
  };

  handleSetModeShortBreak = () => {
    this.props.handleSetModeBreak(initialConfig.shortBreakTime);
    worker.postMessage({
      type: 'SET_TIME', // todo - move to interface or something
      payload: initialConfig.shortBreakTime,
    });
  };

  render = () => (
    <Jumbotron className="align-items-center d-flex flex-column bg-dark">
      <ModeButtonsComponent
        setModePomodoro={this.handleSetModePomodoro}
        setModeLongBreak={this.handleSetModeLongBreak}
        setModeShortBreak={this.handleSetModeShortBreak}
      />
      <CounterContainer handleSavePomodoro={this.props.handleSavePomodoro}></CounterContainer>
      <InfoComponent currentState={this.props.pomodoroCounter.counterState} auth={this.props.auth} />
      <TagContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCounterScreen);
