import React from "react";
import "./style.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Pomik</h1>
      <button className="button">Settings</button>
    </header>
  );
}

export default Header;
