import React from "react";
import { combineReducers } from "redux";
import Header from "../header/Header";
import Timer from "../timer/containers/Timer";
import "./style.scss";
import { store } from "./../shared/store/reducers/reducer";

// Wrapper for whole app
class Main extends React.Component {
  render = () => (
    <div className="app">
      <Header></Header>
      <Timer store={store}></Timer>
      <footer>Hello I'm footer</footer>
    </div>
  );
}

export default Main;
