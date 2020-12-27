import "./stats.component.scss";
export const StatsComponent = (props: any) => (
  <div className="stats">
    <p>Today you have made: {props.amount} pomodoros</p>
    <p>Finished pomodoros: 0</p>
  </div>
);
