export type ValidationMessageType = 'error' | 'warn' | 'success';

export interface ValidationMessageProps {
  type: ValidationMessageType;
  message: string;
}
