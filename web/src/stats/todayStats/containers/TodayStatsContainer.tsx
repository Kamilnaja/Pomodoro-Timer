import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorComponent } from '../../../shared/components/error/ErrorComponent';
import { Loader } from '../../../shared/components/loader/Loader';
import { getCurrentDay, getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import { StatsState } from '../../containers/statsContainerInterfaces';
import { TodayStatsComponent } from '../components/TodayStatsComponent';
import { handleGetTodayStats } from './../../store/actions/statsActions';
import { TodayStatsContainerProps } from './todayStatsContainerProps';

class TodayStatsContainer extends Component<TodayStatsContainerProps> {
  componentDidMount() {
    this.props.handleGetTodayStats({ year: getCurrentYear(), month: getCurrentMonth(), day: getCurrentDay() });
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
