import './validationMessage.scss';
import { ValidationMessageProps } from './ValidationMessageProps';

export const ValidationMessage = (props: ValidationMessageProps) => (
  <div className="validation">
    <span className="validation__text">{props.message}</span>
  </div>
);
