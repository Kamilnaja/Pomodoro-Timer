import {useForm} from "react-hook-form";
import {Registration} from "../../../../../types/interfaces";
import {ValidationMessage} from "../../../shared/components/validationMessage/ValidationMessage";
import {AuthState} from "../../store/interfaces/auth.state";
import "./registerComponent.scss";

export interface RegisterProps {
  handleSubmit: (data: Registration) => void;
  handleClose: () => void;
  formState: AuthState;
}

export const RegisterComponent = (props: RegisterProps) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: Registration) => {
    props.handleSubmit(data);
  };

  return (
    <div className="login">
      <h2 className="login__header">Enter registration data</h2>
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__row">
          <label className="form__label">User name</label>
          <input className="form__input" type="text" name="login" required placeholder="John Doe" ref={register({ required: true })} />
          <div className="form__error">{errors.name && <ValidationMessage type={"error"} message={"Name is required"} />}</div>
        </div>
        <div className="form__row">
          <label className="form__label">Email</label>
          <input type="text" placeholder="johndoe@gmail.com" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          <div className="form__error">
            {errors.email?.type === "required" && <ValidationMessage type={"error"} message={"Email is required"} />}
            {errors.email?.type === "pattern" && <ValidationMessage type={"error"} message={"Please provide correct email"} />}
          </div>
        </div>
        <div className="form__row">
          <label className="form__label">Password</label>
          <input type="password" name="password" required ref={register({ required: true })} />
          <div className="form__error">{errors.password && <ValidationMessage type={"error"} message={"Password is required"} />}</div>
        </div>
        <div className="form__row">
          <label className="form__label">Repeat password</label>
          <input type="password" name="repeatedPassword" required ref={register({ required: true })} />
          <div className="form__error">
            {errors.repeatedPassword && <ValidationMessage type={"error"} message={"Repeated password is required"} />}
          </div>
        </div>
        <button className="form__button" value="Wyślij" type="submit">
          Submit
        </button>
      </form>
      {props.formState.isSuccess && <ValidationMessage message={"success"} type={"success"} />}
    </div>
  );
};
