import React from "react";

interface SettingsProps {
  handleClose: () => void;
}

export class Settings extends React.Component<SettingsProps> {
  render() {
    return <header className="App-header">Settings</header>;
  }
}

export default Settings;
