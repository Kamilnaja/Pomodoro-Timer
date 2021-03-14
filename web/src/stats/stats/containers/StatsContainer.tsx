import React from 'react';
import { connect } from 'react-redux';
import { ErrorComponent } from 'shared/error/errorComponent/ErrorComponent';
import { Loader } from 'shared/loader/Loader';
import { SettingsState, DisplayDirection } from '../../../settings/store/interfaces/settingsInterfaces';
import { getCurrentMonth, getCurrentYear } from '../../../shared/scripts/utils';
import { handleGetStats } from '../../store/actions/statsActions';
import { StatsState } from '../../store/models/StatsInterfaces';
import { StatsComponent } from '../components/StatsComponent';
import { StatsContainerProps } from './StatsContainerProps';
import { handleGetSettings, handleSaveSettings } from '../../../settings/store/actions/settingsActions';

class StatsContainer extends React.Component<StatsContainerProps> {
  componentDidMount() {
    this.props.handleGetStats(getCurrentYear(), getCurrentMonth());
    this.props.handleGetSettings();
  }

  toggleDisplayDirection = (): void => {
    const { settings } = this.props.settingsState;
    this.props.handleSaveSettings({
      ...settings,
      displayDirection:
        settings.displayDirection === DisplayDirection.ASC ? DisplayDirection.DESC : DisplayDirection.ASC,
    });
  };

  toggleDisplayEmptyDays = (): void => {
    const { settings } = this.props.settingsState;
    this.props.handleSaveSettings({
      ...settings,
      displayEmptyDays: !settings.displayEmptyDays,
    });
  };

  render = () => {
    if (this.props.stats.error) {
      return <ErrorComponent />;
    } else if (this.props.stats.isLoading || !this.props.stats.stats) {
      return <Loader />;
    } else {
      return (
        <StatsComponent
          handleGetStats={this.props.handleGetStats}
          stats={this.props.stats.stats}
          settings={this.props.settingsState}
          handleGetSettings={this.props.handleGetSettings}
          handleSaveSettings={this.props.handleSaveSettings}
          toggleDisplayDirection={this.toggleDisplayDirection}
          toggleDisplayEmptyDays={this.toggleDisplayEmptyDays}
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
  handleGetStats: handleGetStats,
};
export const ConnectedStatsContainer = connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
