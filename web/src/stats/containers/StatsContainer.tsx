import React from "react";
import { connect } from "react-redux";
import { MainState } from "../../main/store/interfaces/mainState.interface";
import { StatsComponent } from "../components/StatsComponent";

// Wrapper for whole app
class StatsContainer extends React.Component<{ pomodorosDoneToday: number }> {
  render = () => (
    <StatsComponent
      pomodorosDoneToday={this.props.pomodorosDoneToday}
    ></StatsComponent>
  );
}

function mapStateToProps(state: { main: MainState }) {
  const { pomodorosDoneToday } = state.main;
  return { pomodorosDoneToday };
}

export default connect(mapStateToProps)(StatsContainer);
