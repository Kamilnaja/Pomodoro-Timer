import "./header.scss";

function Header(props: { handleOpenStats: Function }) {
  return (
    <header className="header">
      <h1 className="header__title">Pomik</h1>
      <div>
        <button className="button">Settings</button>
        <button className="button" onClick={() => props.handleOpenStats()}>
          Stats
        </button>
        <button className="button">Login</button>
      </div>
    </header>
  );
}

export default Header;
