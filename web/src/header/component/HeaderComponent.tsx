import { Modal } from "shared/store/enums/modal.enum";
import { AuthState } from "../../auth/store/interfaces/auth.state";
import "./headerComponent.scss";

export interface HeaderProps {
  handleOpenModal: (arg: Modal) => void;
  handleLogout: () => void;
  authState: AuthState;
}

export const HeaderComponent = (props: HeaderProps) => (
  <header className="header">
    <h1 className="header__title">Pomik</h1>
    <div>
      <button className="button" onClick={() => props.handleOpenModal(Modal.SETTINGS)}>
        Settings
      </button>
      <button className="button" onClick={() => props.handleOpenModal(Modal.STATS)}>
        Stats
      </button>
      {!props.authState?.isLoggedIn ? (
        <>
          <button className="button" onClick={() => props.handleOpenModal(Modal.LOGIN)}>
            Login
          </button>
          <button className="button" onClick={() => props.handleOpenModal(Modal.REGISTER)}>
            Register
          </button>
        </>
      ) : (
        <button className="button" onClick={() => props.handleLogout()}>
          Logout
        </button>
      )}
    </div>
  </header>
);
