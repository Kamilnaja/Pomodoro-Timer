import React from "react";
import { connect } from "react-redux";
import { Error } from "../../shared/components/error/Error";
import { Loader } from "../../shared/components/loader/Loader";
import { StatsComponent } from "../components/StatsComponent";
import Stats from "../store/interfaces/stats.interface";
import { getPomodorosThunk } from "../thunk/stats.thunk";

type StatsProps = {
  handleGetTodayStats: Function;
  stats: Stats;
};

class StatsContainer extends React.Component<StatsProps> {
  componentDidMount() {
    this.props.handleGetTodayStats();
  }

  render = () => {
    if (this.props.stats.isLoading) {
      return <Loader></Loader>;
    } else if (this.props.stats.error) {
      return <Error></Error>;
    } else {
      return <StatsComponent stats={this.props.stats}></StatsComponent>;
    }
  };
}

const mapStateToProps = (state: { stats: Stats }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetTodayStats: getPomodorosThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
