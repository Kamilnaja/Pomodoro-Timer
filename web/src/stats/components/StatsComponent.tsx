import { MainState } from "../../main/store/interfaces/mainState.interface";
import { Loader } from "../../shared/components/loader/Loader";
import { Error } from "../../shared/components/error/Error";

import "./stats.component.scss";

export const StatsComponent = (props: { stats: MainState }) => {
  let isLoading = props.stats.isLoading;
  let error = props.stats.error;
  if (isLoading) {
    return <Loader></Loader>;
  } else if (error) {
    return <Error></Error>;
  } else {
    return (
      <div className="stats">
        <p>Today you have made: {props.stats.pomodorosDoneToday} pomodoros</p>
        <p>All finished pomodoros: 0</p>
      </div>
    );
  }
};
