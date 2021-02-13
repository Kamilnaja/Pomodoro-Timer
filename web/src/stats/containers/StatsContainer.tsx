import React from 'react';
import { connect } from 'react-redux';
import { ErrorComponent } from 'shared/error/errorComponent/ErrorComponent';
import { Loader } from 'shared/loader/Loader';
import { getCurrentMonth, getCurrentYear } from '../../shared/scripts/utils';
import { StatsComponent } from '../components/StatsComponent';
import { handleGetStatsInPeriod } from '../store/actions/statsActions';
import { StatsState } from '../store/models/StatsInterfaces';
import { StatsContainerProps } from './StatsContainerProps';

class StatsContainer extends React.Component<StatsContainerProps> {
  componentDidMount() {
    this.props.handleGetStats(getCurrentYear(), getCurrentMonth());
  }

  render = () => {
    if (this.props.stats.isLoading) {
      return <Loader />;
    } else if (this.props.stats.error) {
      return <ErrorComponent />;
    } else {
      return <StatsComponent stats={this.props.stats.results} handleGetStats={this.props.handleGetStats} />;
    }
  };
}

const mapStateToProps = (state: { stats: StatsState }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetStats: handleGetStatsInPeriod,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
