import './logoutComponent.scss';
import { LogoutComponentProps } from './LogoutComponentProps';

export const LogoutComponent = (props: LogoutComponentProps) => (
  <div className="logout">
    <p className="logout__question">Are you sure to logout?</p>
    <div className="logout__buttons-wrapper">
      <button className="logout__button logout__button--no" onClick={() => props.handleCancel()}>
        No
      </button>
      <button className="logout__button logout__button-yes" onClick={() => props.handleLogout()}>
        Yes
      </button>
    </div>
  </div>
);
