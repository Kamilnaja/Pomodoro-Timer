import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SettingsState } from '../../settings/store/interfaces/settingsInterfaces';
import { CookiesInfoComponent } from '../component/CookiesInfoComponent';
import { CookiesInfoContainerProps } from './CookiesInfoContainerProps';
import { handleSaveSettings, handleGetSettings } from 'settings/store/actions/settingsActions';
import { AuthState } from '../../auth/store/interfaces/authState';
import { Loader } from '../../shared/loader/Loader';
import { ErrorComponent } from '../../shared/error/errorComponent/ErrorComponent';

class CookiesInfoContainer extends Component<CookiesInfoContainerProps> {
  componentDidMount() {
    if (this.props.authState.isLoggedIn) {
      this.props.handleGetSettings();
    }
  }

  handleAcceptCookieConsent = () => {
    this.props.handleSaveSettings({ ...this.props.settingsState.settings, isCookieConsentAccepted: true });
  };

  render() {
    const { settingsState } = this.props;

    if (settingsState.isLoading) {
      return <Loader />;
    } else if (settingsState.error) {
      return <ErrorComponent />;
    } else if (!settingsState.settings.isCookieConsentAccepted) {
      return (
        <CookiesInfoComponent
          settingsState={this.props.settingsState}
          handleSaveCookieConsent={this.handleAcceptCookieConsent}
        />
      );
    } else {
      return <></>; // todo - check if needed
    }
  }
}

const mapStateToProps = (state: { settings: SettingsState; auth: AuthState }) => {
  const settingsState = state.settings;
  const authState = state.auth;
  return { settingsState, authState };
};

const mapDispatchToProps = {
  handleSaveSettings,
  handleGetSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(CookiesInfoContainer);
