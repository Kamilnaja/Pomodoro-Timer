import React from "react";

interface SettingsProps {
  handleClose: () => void;
}

export class Settings extends React.Component<SettingsProps> {
  render() {
    return <header className="settings">Settings</header>;
  }
}

export default Settings;
