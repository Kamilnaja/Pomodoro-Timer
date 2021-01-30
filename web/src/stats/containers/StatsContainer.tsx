import React from 'react';
import { connect } from 'react-redux';
import { Error } from 'shared/components/error/Error';
import { Loader } from 'shared/components/loader/Loader';
import { getCurrentMonth, getYear } from '../../shared/scripts/utils';
import { StatsComponent } from '../components/StatsComponent';
import { getStatsInPeriod } from '../store/actions/stats.actions';
import Stats from '../store/interfaces/stats.interface';

type StatsProps = {
  handleGetStats: (year: string, month: string) => void;
  stats: Stats;
};

class StatsContainer extends React.Component<StatsProps> {
  componentDidMount() {
    this.props.handleGetStats(getYear(), getCurrentMonth());
  }

  render = () => {
    if (this.props.stats.isLoading) {
      return <Loader />;
    } else if (this.props.stats.error) {
      return <Error />;
    } else {
      return <StatsComponent stats={this.props.stats} handleGetStats={this.props.handleGetStats} />;
    }
  };
}

const mapStateToProps = (state: { stats: Stats }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetStats: getStatsInPeriod,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
