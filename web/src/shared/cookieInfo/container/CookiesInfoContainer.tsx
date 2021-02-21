import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetSettings, handleSaveSettings, hideCookieInfo } from 'settings/store/actions/settingsActions';
import { AuthState } from '../../../auth/store/interfaces/authState';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import { isCookieConsentVisible } from '../../../settings/store/selectors/settingsSelectors';
import { ErrorComponent } from '../../error/errorComponent/ErrorComponent';
import { Loader } from '../../loader/Loader';
import { isCookieConsentAcceptedKey } from '../../settings/initialConfig';
import { CookiesInfoComponent } from '../component/CookiesInfoComponent';
import { CookiesInfoContainerProps } from './CookiesInfoContainerProps';

class CookiesInfoContainer extends Component<CookiesInfoContainerProps> {
  componentDidMount() {
    if (this.props.authState.isLoggedIn) {
      this.props.handleGetSettings();
    } else {
      if (localStorage.getItem(isCookieConsentAcceptedKey)) {
        this.props.hideCookieInfo();
      }
    }
  }

  handleAcceptCookieConsent = () => {
    if (!this.props.authState.isLoggedIn) {
      window.localStorage.setItem(isCookieConsentAcceptedKey, JSON.stringify(true));
      this.props.hideCookieInfo();
    } else {
      this.props.handleSaveSettings({ ...this.props.settingsState.settings, isCookieConsentAccepted: true });
    }
  };

  render() {
    const { settingsState } = this.props;
    if (settingsState.error) {
      return <ErrorComponent />;
    } else if (isCookieConsentVisible(settingsState)) {
      return (
        <CookiesInfoComponent
          settingsState={this.props.settingsState}
          handleSaveCookieConsent={this.handleAcceptCookieConsent}
        />
      );
    } else {
      return null;
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
  hideCookieInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CookiesInfoContainer);
