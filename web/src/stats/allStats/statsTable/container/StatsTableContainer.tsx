import React from 'react';
import { StatsTableComponent } from '../component/StatsTableComponent';
import { StatsTableContainerProps } from './StatsTableContainerProps';

export class StatsTableContainer extends React.Component<StatsTableContainerProps> {
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
