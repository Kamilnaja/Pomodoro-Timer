import { LogoutComponentProps } from '../../store/interfaces/logoutComponentProps';
import './logoutComponent.scss';

export const LogoutComponent = (props: LogoutComponentProps) => (
  <div className="logout">
    <p className="logout__question">Are you sure to logout?</p>
    <div className="logout__buttons-wrapper">
      <button className="logout__button">No</button>
      <button className="logout__button" onClick={() => props.handleLogout()}>
        Yes
      </button>
    </div>
  </div>
);
