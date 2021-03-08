import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatsState } from '../../store/models/StatsInterfaces';
import { StatsWithTagsComponent } from '../components/StatsWithTagsComponent';
import { StatsWithTagsContainerProps } from './StatsWithTagsContainerProps';
import { handleGetStatsWithTags } from '../../store/actions/statsActions';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';

class StatsWithTagsContainer extends Component<StatsWithTagsContainerProps> {
  componentDidMount() {
    this.props.handleGetStatsWithTags(getCurrentYear(), getCurrentMonth());
  }

  render() {
    return <StatsWithTagsComponent />;
  }
}

const mapStateToProps = (state: { stats: StatsState }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {
  handleGetStatsWithTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsWithTagsContainer);
