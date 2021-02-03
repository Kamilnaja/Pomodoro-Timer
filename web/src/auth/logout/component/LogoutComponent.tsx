import { LogoutComponentProps } from '../../store/interfaces/logoutComponentProps';

export const LogoutComponent = (props: LogoutComponentProps) => (
  <div>
    <h2>You will be logged out</h2>
    <button>Cancel</button>
    <button onClick={() => props.handleLogout()}>OK</button>
  </div>
);
