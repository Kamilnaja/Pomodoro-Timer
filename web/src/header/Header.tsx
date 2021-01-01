import { Modal } from "../shared/store/enums/modal.enum";
import "./header.scss";

export interface HeaderProps {
  handleOpenModal: Function;
}

function Header(props: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title">Pomik</h1>
      <div>
        <button
          className="button"
          onClick={() => props.handleOpenModal(Modal.SETTINGS)}
        >
          Settings
        </button>
        <button
          className="button"
          onClick={() => props.handleOpenModal(Modal.STATS)}
        >
          Stats
        </button>
        <button
          className="button"
          onClick={() => props.handleOpenModal(Modal.LOGIN)}
        >
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
