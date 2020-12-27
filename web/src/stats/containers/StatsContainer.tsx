import React from "react";
import { connect } from "react-redux";
import { MainState } from "../../main/store/interfaces/mainState.interface";
import { StatsComponent } from "../components/StatsComponent";

class StatsContainer extends React.Component<{ stats: MainState }> {
  render = () => <StatsComponent stats={this.props.stats}></StatsComponent>;
}

function mapStateToProps(state: { main: MainState }) {
  const stats = state.main;
  return { stats };
}

export default connect(mapStateToProps)(StatsContainer);
