import "./counter.scss";

export const Counter = (props: { amount: number }) => (
  <div className="counter">
    <p>Today you have made: {props.amount} pomodoros</p>
    <p>Finished pomodoros: 0</p>
  </div>
);
