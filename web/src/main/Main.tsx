import React from "react";
import Header from "../header/Header";
import StatisticsContainer from "../statistics/container/StatisticsContainer";
import StatsContainer from "../stats/containers/StatsContainer";
import Timer from "../timer/containers/Timer";
import "./main.scss";

// Wrapper for whole app
class Main extends React.Component {
  isStatsVisible: boolean = false;

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

export default Main;
