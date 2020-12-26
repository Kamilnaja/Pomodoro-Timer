import React from "react";
import Header from "../header/Header";
import Timer from "../timer/containers/Timer";
import "./style.scss";

// Wrapper for whole app
function Main() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Timer></Timer>
      </main>
      <footer>Hello I'm footer</footer>
    </div>
  );
}

export default Main;
