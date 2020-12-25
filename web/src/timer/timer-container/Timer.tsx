import React from "react";
import "./style.scss";

function Timer() {
  return (
    <div className="timer">
      <button className="timer__button--mode">Pomodoro</button>
      <button className="timer__button--mode">Short Break</button>
      <button className="timer__button--mode">Long Break</button>
      <div className="timer__time time">22:23</div>
      <button className="timer__button--stop">Stop</button>
    </div>
  );
}

export default Timer;
