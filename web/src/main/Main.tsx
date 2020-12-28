import React from "react";
import { connect } from "react-redux";
import Header from "../header/Header";
import StatisticsContainer from "../statistics/container/StatisticsContainer";
import StatsContainer from "../stats/containers/StatsContainer";
import Timer from "../timer/containers/Timer";
import { State } from "../timer/store/interfaces/state.interface";
import "./main.scss";
import { MainProps } from "./store/interfaces/mainProps.interface";
import { getPomodorosThunk } from "./store/thunk/main.thunk";

// Wrapper for whole app
class Main extends React.Component<MainProps, State> {
  isStatsVisible: boolean = false;

  componentDidMount() {
    this.props.handleGetTodayStats();
  }

  handleOpenStats = () => {
    this.isStatsVisible = !this.isStatsVisible;
    console.log(this.isStatsVisible);
  };

  render = () => (
    <div className="app">
      {this.isStatsVisible && <StatisticsContainer></StatisticsContainer>}
      {this.isStatsVisible}
      <Header handleOpenStats={this.handleOpenStats}></Header>
      <Timer></Timer>
      <StatsContainer></StatsContainer>
      <footer>Hello I'm footer</footer>
    </div>
  );
}

const mapDispatchToProps = {
  handleGetTodayStats: getPomodorosThunk,
};

export default connect(null, mapDispatchToProps)(Main);
