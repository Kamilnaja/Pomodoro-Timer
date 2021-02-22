import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetSettings, handleSaveSettings, hideCookieInfo } from 'settings/store/actions/settingsActions';
import { AuthState } from '../../../auth/store/interfaces/authState';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import {
  isCookieConsentAcceptationSavedInStorage,
  isCookieConsentVisible,
} from '../../../settings/store/selectors/settingsSelectors';
import { ErrorComponent } from '../../error/errorComponent/ErrorComponent';
import { cookieConsentAcceptationKey } from '../../settings/initialConfig';
import { CookiesInfoComponent } from '../component/CookiesInfoComponent';
import { CookiesInfoContainerProps } from './CookiesInfoContainerProps';

class CookiesInfoContainer extends Component<CookiesInfoContainerProps> {
  componentDidMount() {
    if (this.props.authState.isLoggedIn && !isCookieConsentAcceptationSavedInStorage()) {
      this.props.handleGetSettings();
    }
  }

  handleAcceptCookieConsent = () => {
    if (!this.props.authState.isLoggedIn) {
      window.localStorage.setItem(cookieConsentAcceptationKey, JSON.stringify(true));
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
