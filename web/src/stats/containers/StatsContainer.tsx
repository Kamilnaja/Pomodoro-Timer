import React from 'react';
import { connect } from 'react-redux';
import { Error } from 'shared/components/error/Error';
import { Loader } from 'shared/components/loader/Loader';
import { StatsComponent } from '../components/StatsComponent';
import { getLastStats } from '../store/actions/stats.actions';
import Stats from '../store/interfaces/stats.interface';

type StatsProps = {
  handleGetLastStats: (args: number) => void;
  stats: Stats;
};

class StatsContainer extends React.Component<StatsProps> {
  componentDidMount() {
    this.props.handleGetLastStats(30);
  }

  render = () => {
    if (this.props.stats.isLoading) {
      return <Loader />;
    } else if (this.props.stats.error) {
      return <Error />;
    } else {
      return <StatsComponent stats={this.props.stats} />;
    }
  };
}

const mapStateToProps = (state: { stats: Stats }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetLastStats: getLastStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
