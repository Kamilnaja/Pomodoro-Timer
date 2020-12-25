import React from "react";
import "./style.scss";

function Timer() {
  return (
    <div className="timer">
      <div className="timer__button-wrapper">
        <button className="timer__button timer__button--mode">Pomodoro</button>
        <button className="timer__button timer__button--mode">
          Short Break
        </button>
        <button className="timer__button timer__button--mode">
          Long Break
        </button>
      </div>
      <div className="timer__time time">22:23</div>
      <button className="timer__button timer__button--stop">Stop</button>
    </div>
  );
}

export default Timer;
