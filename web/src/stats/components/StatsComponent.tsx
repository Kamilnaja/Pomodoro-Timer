import "./stats.component.scss";

type StatsProps = {
  pomodorosDoneToday: number;
  allPomodoros: number;
};

export const StatsComponent = (props: { stats: StatsProps }) => {
  return (
    <div className="stats">
      <p>Today you have made: {props.stats.pomodorosDoneToday} pomodoros</p>
    </div>
  );
};
