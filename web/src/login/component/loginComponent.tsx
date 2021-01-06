import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { ValidationMessage } from "../../shared/components/validationMessage/ValidationMessage";
import "./loginComponent.scss";

export interface LoginProps {
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export const LoginComponent = (props: LoginProps) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="login">
      <h2 className="login__header">Please sign in</h2>
      <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__row">
          <label className="form__label">User name</label>
          <input
            className="form__input"
            type="text"
            name="name"
            required
            ref={register({ required: true })}
          />
          <div className="form__error">
            {errors.name && (
              <ValidationMessage
                type={"error"}
                message={"Name is required"}
              ></ValidationMessage>
            )}
          </div>
        </div>
        <div className="form__row">
          <label className="form__label">Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <div className="form__error">
            {errors.email?.type === "required" && (
              <ValidationMessage
                type={"error"}
                message={"Email is required"}
              ></ValidationMessage>
            )}
            {errors.email?.type === "pattern" && (
              <ValidationMessage
                type={"error"}
                message={"Please provide correct email"}
              ></ValidationMessage>
            )}
          </div>
        </div>
        <div className="form__row">
          <label className="form__label">Password</label>
          <input
            type="password"
            name="password"
            required
            ref={register({ required: true })}
          />
          <div className="form__error">
            {errors.password && (
              <ValidationMessage
                type={"error"}
                message={"Password is required"}
              ></ValidationMessage>
            )}
          </div>
        </div>
        <div className="form__row">
          <label className="form__label">Repeat password</label>
          <input
            type="password"
            name="repeatedPassword"
            required
            ref={register({ required: true })}
          />
          <div className="form__error">
            {errors.repeatedPassword && (
              <ValidationMessage
                type={"error"}
                message={"Repeated password is required"}
              ></ValidationMessage>
            )}
          </div>
        </div>
        <button value="Wyślij" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
};
