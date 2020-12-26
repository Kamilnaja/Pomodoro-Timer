import React from "react";
import Header from "../header/Header";
import "./style.scss";
import { store } from "./../shared/store/reducers/reducer";
import { State } from "../timer/store/interfaces/state.interface";
import Timer from "../timer/containers/timer";

// Wrapper for whole app
class Main extends React.Component<{}, State> {
  componentDidMount() {
    // this.props.fetchStats();
  }

  render = () => (
    <div className="app">
      <Header></Header>
      <Timer store={store}></Timer>
      <footer>Hello I'm footer</footer>
    </div>
  );
}

export default Main;
