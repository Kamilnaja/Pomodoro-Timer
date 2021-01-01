import { FormEvent } from "react";

export interface LoginProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const LoginComponent = (props: LoginProps) => (
  <form onSubmit={props.handleSubmit}>
    <h2>Please sign in</h2>
    <label>
      Imię:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Wyślij" />
  </form>
);
