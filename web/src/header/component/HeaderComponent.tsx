import { ModalType } from 'shared/store/enums/modalEnum';
import { openModal } from '../../shared/store/interfaces/modalInterface';
import './headerComponent.scss';

export interface HeaderProps {
  handleOpenModal: openModal;
  isLoggedIn: boolean;
}

export const HeaderComponent = (props: HeaderProps) => (
  <header className="header">
    <h1 className="header__title">Pomik</h1>
    <ul className="header__buttons-wrapper">
      {!props.isLoggedIn ? (
        <>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(ModalType.LOGIN)}>
              Login
            </button>
          </li>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(ModalType.REGISTER)}>
              Register
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(ModalType.SETTINGS)}>
              Settings
            </button>
          </li>
          <li>
            <button className="button" onClick={() => props.handleOpenModal(ModalType.LOGOUT)}>
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  </header>
);
