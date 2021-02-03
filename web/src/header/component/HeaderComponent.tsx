import { Modal } from 'shared/store/enums/modalEnum';
import { openModal } from '../../shared/store/interfaces/modalInterface';
import './headerComponent.scss';

export interface HeaderProps {
  handleOpenModal: openModal;
  handleOpenLogoutModal: openModal;
  isLoggedIn: boolean;
}

export const HeaderComponent = (props: HeaderProps) => (
  <header className="header">
    <h1 className="header__title">Pomik</h1>
    <ul className="header__buttons-wrapper">
      {!props.isLoggedIn ? (
        <>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(Modal.LOGIN)}>
              Login
            </button>
          </li>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(Modal.REGISTER)}>
              Register
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(Modal.SETTINGS)}>
              Settings
            </button>
          </li>
          <li>
            <button className="button" onClick={() => props.handleOpenLogoutModal(Modal.LOGOUT)}>
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  </header>
);
