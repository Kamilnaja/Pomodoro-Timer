import "./style.scss";

export const Counter = (props: { amount: number }) => (
  <div className="counter">Today you have made: {props.amount} pomodoros</div>
);
