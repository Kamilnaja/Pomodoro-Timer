import React from 'react';
import { StatsTableComponent } from '../component/StatsTableComponent';
import { StatsTableContainerProps } from './StatsTableContainerProps';
import { StatsTableContainerState } from './StatsTableContainerState';

export class StatsTableContainer extends React.Component<StatsTableContainerProps, StatsTableContainerState> {
  constructor(props: StatsTableContainerProps) {
    super(props);
    this.state = {
      sortAscending: false,
      showEmptyDays: false,
    };
  }

  toggleSorting = () =>
    this.setState({
      sortAscending: !this.state.sortAscending,
    });

  render() {
    return (
      <StatsTableComponent
        pageMonth={this.props.pageMonth}
        pageYear={this.props.pageYear}
        pomodoros={this.props.pomodoros}
      ></StatsTableComponent>
    );
  }
}
