import { useForm } from "react-hook-form";
import { Login } from "../../../../../types/interfaces";
import { ValidationMessage } from "../../../shared/components/validationMessage/ValidationMessage";
import { AuthState } from "../../store/interfaces/auth.state";
import "./loginComponent.scss";

export interface LoginProps {
  handleSubmit: (data: Login) => void;
  handleClose: () => void;
  auth: AuthState;
}

export const LoginComponent = (props: LoginProps) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (loginData: Login) => {
    props.handleSubmit(loginData);
  };

  return (
    <div className="login">
      <h2 className="login__header">Please login</h2>
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__row">
          <label className="form__label">User name</label>
          <input className="form__input" type="text" name="login" required placeholder="John Doe" ref={register({ required: true })} />
          <div className="form__error">{errors.name && <ValidationMessage type={"error"} message={"Name is required"} />}</div>
        </div>
        <div className="form__row">
          <label className="form__label">Password</label>
          <input type="password" name="password" required ref={register({ required: true })} />
          <div className="form__error">{errors.password && <ValidationMessage type={"error"} message={"Password is required"} />}</div>
        </div>
        <button className="form__button" value="Wyślij" type="submit">
          Submit
        </button>
      </form>
      {props.auth.isSuccess && <ValidationMessage message={"success"} type={"success"} />}
    </div>
  );
};
