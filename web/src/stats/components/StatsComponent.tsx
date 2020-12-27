import "./stats.component.scss";

export const StatsComponent = (props: { pomodorosDoneToday: number }) => (
  <div className="stats">
    <p>Today you have made: {props.pomodorosDoneToday} pomodoros</p>
    <p>All finished pomodoros: 0</p>
  </div>
);
