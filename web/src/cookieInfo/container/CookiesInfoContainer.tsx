import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SettingsState } from '../../settings/store/interfaces/settingsInterfaces';
import { CookiesInfoComponent } from '../component/CookiesInfoComponent';
import { CookiesInfoContainerProps } from './CookiesInfoContainerProps';
import { handleSaveCookieConsent } from 'settings/store/actions/settingsActions';

class CookiesInfoContainer extends Component<CookiesInfoContainerProps> {
  handleAcceptCookieConsent = () => {
    this.props.handleSaveCookieConsent({ ...this.props.settingsState.settings, isCookieConsentAccepted: true });
  };

  render() {
    return (
      <CookiesInfoComponent
        settingsState={this.props.settingsState}
        handleSaveCookieConsent={this.handleAcceptCookieConsent}
      />
    );
  }
}

const mapStateToProps = (state: { settings: SettingsState }) => {
  const settingsState = state.settings;
  return { settingsState };
};

const mapDispatchToProps = {
  handleSaveCookieConsent,
};

export default connect(mapStateToProps, mapDispatchToProps)(CookiesInfoContainer);
