import React from "react";
import { connect } from "react-redux";
import { StatisticsComponent } from "../component/StatisticsComponent";
// wrapper for all statistics
class StatisticsContainer extends React.Component {
  render() {
    return (
      <div>
        STATS TTTT
        <StatisticsComponent></StatisticsComponent>
      </div>
    );
  }
}

export default connect(null, null)(StatisticsContainer);
