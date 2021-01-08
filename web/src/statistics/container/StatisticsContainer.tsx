import React from "react";
import { StatisticsComponent } from "../component/StatisticsComponent";
// wrapper for all statistics
interface StatisticsProps {
  handleClose: () => void;
}

class StatisticsContainer extends React.Component<StatisticsProps> {
  render = () => <StatisticsComponent></StatisticsComponent>;
}

export default StatisticsContainer;
