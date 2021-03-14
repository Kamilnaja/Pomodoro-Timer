import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatsState } from '../../store/models/StatsInterfaces';
import { StatsWithTagsComponent } from '../components/StatsWithTagsComponent';
import { StatsWithTagsContainerProps } from './StatsWithTagsContainerProps';
import { handleGetStatsWithTags } from '../../store/actions/statsActions';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import { ErrorComponent } from '../../../shared/error/errorComponent/ErrorComponent';
import { Loader } from '../../../shared/loader/Loader';
import { ChartWithTags } from '../../chartWithTags/ChartWithTags';

class StatsWithTagsContainer extends Component<StatsWithTagsContainerProps> {
  componentDidMount() {
    this.props.handleGetStatsWithTags(getCurrentYear(), getCurrentMonth());
  }

  render() {
    if (this.props.stats.error) {
      return <ErrorComponent />;
    } else if (this.props.stats.isLoadingWithTags || !this.props.stats.statsWithTags) {
      return <Loader />;
    } else {
      return (
        <>
          <ChartWithTags statsWithTags={this.props.stats.statsWithTags} />
          <StatsWithTagsComponent statsWithTags={this.props.stats.statsWithTags} />;
        </>
      );
    }
  }
}

const mapStateToProps = (state: { stats: StatsState }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetStatsWithTags,
};

export const ConnectedStatsWithTagsContainer = connect(mapStateToProps, mapDispatchToProps)(StatsWithTagsContainer);
