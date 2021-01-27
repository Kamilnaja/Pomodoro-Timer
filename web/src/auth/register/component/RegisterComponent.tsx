import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ValidationMessage } from "shared/components/validationMessage/ValidationMessage";
import { Registration } from "../../../../../types/interfaces";
import { AuthState } from "../../store/interfaces/auth.state";
import "./registerComponent.scss";

export interface RegisterProps {
  handleSubmit: (arg: Registration) => void;
  handleClose: () => void;
  formState: AuthState;
}

type FormData = {
  login: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

export const RegisterComponent = (props: RegisterProps) => {
  const { register, errors, handleSubmit, watch } = useForm<FormData>();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data: Registration) => {
    props.handleSubmit(data);
  };

  return (
    <div className="login">
      {props.formState.isSuccess && <div>🤩Registered successfully, now you can log in</div>}
      <h2 className="login__header">Enter registration data</h2>
      <div className="form_error">
        {props.formState.error?.message && <ValidationMessage type={"error"} message={props.formState.error.message} />}
      </div>
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__row">
          <label className="form__label">User login</label>
          <input
            className="form__input"
            type="text"
            name="login"
            placeholder="John Doe"
            ref={register({ required: "😱Login is required" })}
          />
          <div className="form__error">{errors.login && <ValidationMessage type={"error"} message={errors.login.message as string} />}</div>
        </div>
        <div className="form__row">
          <label className="form__label">Email</label>
          <input type="text" placeholder="johndoe@gmail.com" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          <div className="form__error">
            {errors.email?.type === "required" && <ValidationMessage type={"error"} message={"😓Email is required"} />}
            {errors.email?.type === "pattern" && <ValidationMessage type={"error"} message={"🤥Please provide correct email"} />}
          </div>
        </div>
        <div className="form__row">
          <label className="form__label">Password</label>
          <input
            name="password"
            type="password"
            ref={register({
              required: "🤯You must specify a password",
              minLength: { value: 8, message: "😱Password must have at least 8 characters" },
            })}
          />
          <div className="form__error">
            {errors.password && <ValidationMessage type={"error"} message={errors.password.message as string} />}
          </div>
        </div>
        <div className="form__row">
          <label className="form__label">Repeat password</label>
          <input
            name="repeatedPassword"
            type="password"
            ref={register({ validate: value => value === password.current || "😨The passwords do not match" })}
          />
          <div className="form__error">
            {errors.repeatedPassword && <ValidationMessage type={"error"} message={errors.repeatedPassword.message as string} />}
          </div>
        </div>
        <button className="form__button" value="Wyślij" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
