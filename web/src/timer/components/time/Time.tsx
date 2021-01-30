import './time.scss';

export const Time = (props: { time: string }) => {
  return <div className="timer__time time">{props.time}</div>;
};
