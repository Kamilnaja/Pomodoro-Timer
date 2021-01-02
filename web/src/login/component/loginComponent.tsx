import { ChangeEvent, MouseEventHandler } from "react";
import { LoginState } from "../container/LoginContainer";

export interface LoginComponentProps {
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formData: LoginState;
}

export const LoginComponent = (props: LoginComponentProps) => (
  <form>
    <h2>Please sign in</h2>
    <div>
      <label>
        User name
        <input
          type="text"
          name="name"
          required
          value={props.formData.name}
          onChange={props.handleChange}
        />
      </label>
    </div>
    <div>
      <label>
        Email
        <input
          type="text"
          name="email"
          required
          value={props.formData.email}
          onChange={props.handleChange}
        />
      </label>
    </div>
    <div>
      <label>
        Password
        <input
          type="text"
          name="password"
          required
          value={props.formData.password}
          onChange={props.handleChange}
        />
      </label>
    </div>
    <button value="Wyślij" onClick={props.handleSubmit}>
      Submit
    </button>
  </form>
);
