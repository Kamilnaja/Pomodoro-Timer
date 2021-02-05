import { ModalType } from 'shared/store/enums/modalEnum';
import { openModal } from '../../shared/store/interfaces/modalInterface';
import './headerComponent.scss';
import Button from 'react-bootstrap/Button';

export interface HeaderProps {
  handleOpenModal: openModal;
  isLoggedIn: boolean;
}

export const HeaderComponent = (props: HeaderProps) => (
  <header className="header">
    <h1 className="header__title">Tomatodone</h1>
    <nav>
      <ul className="header__buttons-wrapper">
        {!props.isLoggedIn ? (
          <>
            <li>
              <Button variant="link" onClick={() => props.handleOpenModal(ModalType.LOGIN)}>
                Login
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => props.handleOpenModal(ModalType.REGISTER)}>
                Register
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button variant="link" onClick={() => props.handleOpenModal(ModalType.SETTINGS)}>
                Settings
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => props.handleOpenModal(ModalType.LOGOUT)}>
                Logout
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
);
