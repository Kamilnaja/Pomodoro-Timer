import './time.scss';
import { TimerComponentProps } from './TimerComponentProps';

export const TimeComponent = (props: TimerComponentProps) => {
  return <div className="time text-light d-flex align-items-center">{props.time}</div>;
};
