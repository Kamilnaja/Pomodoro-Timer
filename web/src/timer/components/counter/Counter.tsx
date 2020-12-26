import "./style.scss";

export const Counter = (props: { amount: number }) => (
  <div className="counter">
    <span>Today you have made: {props.amount} pomodoros</span>
  </div>
);
