import React from 'react';
import { connect } from 'react-redux';
import { Error } from 'shared/components/error/Error';
import { Loader } from 'shared/components/loader/Loader';
import { getCurrentMonth, getCurrentYear } from '../../shared/scripts/utils';
import { StatsComponent } from '../components/StatsComponent';
import { getStatsInPeriod } from '../store/actions/statsActions';
import { StatsContainerProps, StatsState } from '../store/interfaces/statsInterfaces';

class StatsContainer extends React.Component<StatsContainerProps> {
  componentDidMount() {
    this.props.handleGetStats(getCurrentYear(), getCurrentMonth());
  }

  render = () => {
    if (this.props.stats.isLoading) {
      return <Loader />;
    } else if (this.props.stats.error) {
      return <Error />;
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
  handleGetStats: getStatsInPeriod,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
