import React, { ChangeEventHandler } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import 'shared/settings/initialConfig';
import { initialConfig } from 'shared/settings/initialConfig';
import { AuthState } from '../../auth/store/interfaces/authState';
import { handleSavePomodoro } from '../../stats/store/actions/statsActions';
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

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      tag: newValue,
    });

    console.log(this.state);
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
      <form>
        <span className="text-white">I'm focusing at :</span>
        <select onChange={this.handleChange}>
          <option value="reading">Reading</option>
          <option value="working">Working</option>
          <option value="working">Own project</option>
        </select>
        <button>Submit</button>
      </form>
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
