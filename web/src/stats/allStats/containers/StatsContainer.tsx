import React from 'react';
import { connect } from 'react-redux';
import { ErrorComponent } from 'shared/error/errorComponent/ErrorComponent';
import { Loader } from 'shared/loader/Loader';
import { SettingsState, SortDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import { handleGetStatsInPeriod } from '../../store/actions/statsActions';
import { StatsState } from '../../store/models/StatsInterfaces';
import { StatsComponent } from '../components/StatsComponent';
import { StatsContainerProps } from './StatsContainerProps';
import { handleGetSettings, handleSaveSettings } from '../../../settings/store/actions/settingsActions';

class StatsContainer extends React.Component<StatsContainerProps> {
  componentDidMount() {
    this.props.handleGetStats(getCurrentYear(), getCurrentMonth());
    this.props.handleGetSettings();
  }

  toggleSortDirection = (): void => {
    const { settings } = this.props.settingsState;
    this.props.handleSaveSettings({
      ...settings,
      sortDirection: settings.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC,
    });
  };

  render = () => {
    if (this.props.stats.error) {
      return <ErrorComponent />;
    } else if (this.props.stats.isLoading || !this.props.stats.results) {
      return <Loader />;
    } else {
      return (
        <StatsComponent
          handleGetStats={this.props.handleGetStats}
          stats={this.props.stats.results}
          settings={this.props.settingsState}
          handleGetSettings={this.props.handleGetSettings}
          handleSaveSettings={this.props.handleSaveSettings}
          toggleSortDirection={this.toggleSortDirection}
        />
      );
    }
  };
}

const mapStateToProps = (state: { stats: StatsState; settings: SettingsState }) => {
  const stats = state.stats;
  const settingsState = state.settings;
  return { stats, settingsState };
};

const mapDispatchToProps = {
  handleSaveSettings,
  handleGetSettings,
  handleGetStats: handleGetStatsInPeriod,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
