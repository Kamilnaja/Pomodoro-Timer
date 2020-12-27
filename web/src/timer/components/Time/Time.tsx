import "./time.scss";

export function Time(props: { time: string }) {
  return <div className="timer__time time">{props.time}</div>;
}
