import React from 'react';
import { ErrorComponent } from '../../../shared/error/errorComponent/ErrorComponent';
import { Loader } from '../../../shared/loader/Loader';
import { StatsTableComponent } from '../component/StatsTableComponent';
import { StatsTableContainerProps } from './StatsTableContainerProps';

class StatsTableContainer extends React.Component<StatsTableContainerProps> {
  render() {
    if (this.props.settingsState.isLoading) {
      return <Loader />;
    } else if (this.props.settingsState.error) {
      return <ErrorComponent />;
    } else {
      return (
        <StatsTableComponent
          pageMonth={this.props.pageMonth}
          pageYear={this.props.pageYear}
          pomodoros={this.props.pomodoros}
          settings={this.props.settingsState.settings}
          toggleDisplayDirection={this.props.toggleDisplayDirection}
          toggleDisplayEmptyDays={this.props.toggleDisplayEmptyDays}
        ></StatsTableComponent>
      );
    }
  }
}

export default StatsTableContainer;
