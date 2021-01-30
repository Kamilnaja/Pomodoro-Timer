import './validationMessage.scss';

export type ValidationMessageType = 'error' | 'warn' | 'success';

export interface ValidationMessageProps {
  type: ValidationMessageType;
  message: string;
}

export const ValidationMessage = (props: ValidationMessageProps) => (
  <div className="validation-message">
    <span className="validation-message__text">{props.message}</span>
  </div>
);
