import React from "react";
import Header from "../header/Header";
import Timer from "../timer/timer-container/Timer";
import "./style.scss";

// Wrapper for whole app
function Main() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Timer></Timer>
      </main>
      <footer>Hellom I'm footer</footer>
    </div>
  );
}

export default Main;
