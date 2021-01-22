import { Modal } from "shared/store/enums/modal.enum";
import "./headerComponent.scss";

export interface HeaderProps {
  handleOpenModal: (arg: Modal) => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
}

export const HeaderComponent = (props: HeaderProps) => (
  <header className="header">
    <h1 className="header__title">Pomik</h1>
    <div className="header__buttons-wrapper">
      {!props.isLoggedIn ? (
        <>
          <button className="button" onClick={() => props.handleOpenModal(Modal.LOGIN)}>
            Login
          </button>
          <button className="button" onClick={() => props.handleOpenModal(Modal.REGISTER)}>
            Register
          </button>
        </>
      ) : (
        <>
          <button className="button" onClick={() => props.handleOpenModal(Modal.SETTINGS)}>
            Settings
          </button>
          <button className="button" onClick={() => props.handleOpenModal(Modal.STATS)}>
            Stats
          </button>
          <button className="button" onClick={() => props.handleLogout()}>
            Logout
          </button>
        </>
      )}
    </div>
  </header>
);
