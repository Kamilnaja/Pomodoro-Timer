import React from 'react';
import { connect } from 'react-redux';
import { SettingsState, SortDirection } from '../../../../settings/store/interfaces/settingsInterfaces';
import { StatsTableComponent } from '../component/StatsTableComponent';
import { StatsTableContainerProps } from './StatsTableContainerProps';
import { handleGetSettings, handleSaveSettings } from '../../../../settings/store/actions/settingsActions';

class StatsTableContainer extends React.Component<StatsTableContainerProps> {
  componentDidMount() {
    this.props.handleGetSettings();
  }

  toggleSortDirection = (): void => {
    const { settings } = this.props.settingsState;
    this.props.handleSaveSettings({
      ...settings,
      sortDirection: settings.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC,
    });
  };

  render() {
    return (
      <StatsTableComponent
        pageMonth={this.props.pageMonth}
        pageYear={this.props.pageYear}
        pomodoros={this.props.pomodoros}
        sortDirection={this.props.settingsState.settings.sortDirection}
        toggleSortDirection={this.toggleSortDirection}
      ></StatsTableComponent>
    );
  }
}

const mapStateToProps = (state: { settings: SettingsState }) => {
  const settingsState = state.settings;
  return { settingsState };
};

const mapDispatchToProps = {
  handleSaveSettings,
  handleGetSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsTableContainer);
