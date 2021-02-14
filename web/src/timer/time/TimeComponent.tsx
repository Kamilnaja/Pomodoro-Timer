import './time.scss';
import { TimeComponentProps } from './TimeComponentProps';

export const TimeComponent = (props: TimeComponentProps) => {
  return (
    <div className="time text-light d-flex align-items-center">
      <span>{props.time}</span>
    </div>
  );
};
