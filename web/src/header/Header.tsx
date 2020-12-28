import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Pomik</h1>
      <button className="button">Stats</button>
      <button className="button">Settings</button>
    </header>
  );
}

export default Header;
