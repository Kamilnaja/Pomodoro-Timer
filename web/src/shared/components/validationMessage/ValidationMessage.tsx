export type ValidationMessageType = "error" | "warn" | "success";

export interface ValidationMessageProps {
  type: ValidationMessageType;
  message: string;
}

export const ValidationMessage = (props: ValidationMessageProps) => (
  <div>{props.message}</div>
);
