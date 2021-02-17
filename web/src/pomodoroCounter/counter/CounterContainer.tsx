import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { msToTime } from '../../shared/scripts/utils';
import { TabTitle } from '../../shared/title/TabTitle';
import { updateCounter } from '../store/actions/pomodoroCounterAction';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';
import { TimeComponent } from '../time/TimeComponent';
import { CounterComponentProps } from './CounterContainerProps';

class CounterContainer extends React.Component<CounterComponentProps> {
  private tabTitle = new TabTitle();

  stopTimer = () => {
    console.log('stopping timer');
  };

  worker: Worker;
  componentDidMount() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('scripts/counter.js');
      this.worker.onmessage = e => {
        const { data } = e;
        if (data.isRunning) {
          const { time } = data;
          this.tabTitle.setTitle = `${msToTime(time)}`;
          this.props.updateCounter(time);
        } else {
          this.tabTitle.startBlinking();
        }
      };
    } else {
      console.log('Your browser do not allow to use web workers. Please use other browser');
    }
  }
  render() {
    return (
      <>
        <TimeComponent time={msToTime(this.props.counterState.counterTime)} />
        {/* <Button variant="success" onClick={isAnyTimerRunning(props.state) ? props.pauseCounter : props.startCounter}>
          {isAnyTimerRunning(props.state) ? 'Stop timer' : 'Start timer'}
        </Button> */}
        <Button onClick={this.stopTimer}>Stop timer</Button>
      </>
    );
  }
}

const mapStateToProps = (state: { pomodoroCounter: PomodoroCounterState }) => {
  const { pomodoroCounter } = state;
  return { counterState: pomodoroCounter };
};

const mapDispatchToProps = {
  updateCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
