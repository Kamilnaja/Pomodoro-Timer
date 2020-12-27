import React from "react";
import { StatsComponent } from "../components/StatsComponent";

// Wrapper for whole app
export default class StatsContainer extends React.Component<{}> {
  render = () => <StatsComponent></StatsComponent>;
}
