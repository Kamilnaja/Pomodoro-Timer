import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatsState } from '../../store/models/StatsInterfaces';
import { StatsWithTagsComponent } from '../components/StatsWithTagsComponent';
import { StatsWithTagsContainerProps } from './StatsWithTagsContainerProps';

class StatsWithTagsContainer extends Component<StatsWithTagsContainerProps> {
  render() {
    return <StatsWithTagsComponent />;
  }
}

const mapStateToProps = (state: { stats: StatsState }) => {
  const stats = state.stats;
  return { stats };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StatsWithTagsContainer);
