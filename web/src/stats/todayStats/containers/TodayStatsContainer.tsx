import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorComponent } from '../../../shared/error/errorComponent/ErrorComponent';
import { Loader } from '../../../shared/loader/Loader';
import { StatsState } from '../../store/models/StatsInterfaces';
import { TodayStatsComponent } from '../components/TodayStatsComponent';
import { handleGetTodayStats } from './../../store/actions/statsActions';
import { TodayStatsContainerProps } from './TodayStatsContainerProps';

class TodayStatsContainer extends Component<TodayStatsContainerProps> {
  componentDidMount() {
    this.props.handleGetTodayStats();
  }

  render() {
    if (this.props.stats.isLoading) {
      return <Loader />;
    } else if (this.props.stats.error) {
      return <ErrorComponent />;
    } else {
      return <TodayStatsComponent result={this.props.stats.todayResults} />;
    }
  }
}

const mapStateToProps = (state: { stats: StatsState }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetTodayStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodayStatsContainer);
