import { useForm } from "react-hook-form";
import "./loginComponent.scss";
import { MouseEventHandler } from "react";

export interface LoginProps {
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

export const LoginComponent = (props: LoginProps) => {
  const { register, handleSubmit } = useForm();
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
            ref={register({ min: 3 })}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Email</label>
          <input
            type="email"
            name="email"
            required
            ref={register({
              min: 3,
            })}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Password</label>
          <input
            type="password"
            name="password"
            required
            ref={register({
              min: 3,
            })}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Repeat password</label>
          <input
            type="password"
            name="repeatedPassword"
            required
            ref={register({
              min: 3,
            })}
          />
        </div>
        <button value="Wyślij" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
};
