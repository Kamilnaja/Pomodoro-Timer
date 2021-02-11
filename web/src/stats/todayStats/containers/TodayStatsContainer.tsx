import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import { StatsState } from '../../containers/statsContainerInterfaces';
import { TodayStatsComponent } from '../components/TodayStatsComponent';
import { handleGetTodayStats } from './../../store/actions/statsActions';
import { TodayStatsContainerProps } from './todayStatsContainerProps';

class TodayStatsContainer extends Component<TodayStatsContainerProps> {
  componentDidMount() {
    this.props.handleGetTodayStats({year: getCurrentYear(), month: getCurrentMonth(), day: });
  }

  render() {
    return <TodayStatsComponent result={this.props.todayStats} />;
  }
}

const mapStateToProps = (state: StatsState) => {
  const todayStats = state.todayResults;
  return { todayStats };
};

const mapDispatchToProps = {
  handleGetTodayStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodayStatsContainer);
