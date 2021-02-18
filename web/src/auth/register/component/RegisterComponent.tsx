import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ValidationMessage } from 'shared/validationMessage/ValidationMessage';
import { Registration } from '../../../../../types/authInterfaces';
import './registerComponent.scss';
import { RegisterComponentProps, RegisterFormData } from './RegisterComponentProps';

export const RegisterComponent = (props: RegisterComponentProps) => {
  const { register, errors, handleSubmit, watch } = useForm<RegisterFormData>();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data: Registration) => {
    props.handleSubmit(data);
  };

  return (
    <div className="register">
      {props.formState.isSuccess ? (
        <div>🤩Registered successfully, now you can log in</div>
      ) : (
        <>
          {props.formState.error?.message && (
            <ValidationMessage type={'error'} message={props.formState.error.message} />
          )}
          <form className="register__form form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__row">
              <label className="form__label label" htmlFor="login">
                User login
              </label>
              <input
                className="form__input input"
                type="text"
                name="login"
                id="login"
                placeholder="John Doe"
                ref={register({ required: '😱Login is required' })}
                required
                autoFocus
              />
              {errors.login && <ValidationMessage type={'error'} message={errors.login.message as string} />}
            </div>
            <div className="form__row">
              <label className="form__label label" htmlFor="email">
                Email
              </label>
              <input
                className="form__input input"
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                required
              />
              {errors.email?.type === 'required' && (
                <ValidationMessage type={'error'} message={'😓Email is required'} />
              )}
              {errors.email?.type === 'pattern' && (
                <ValidationMessage type={'error'} message={'🤥Please provide correct email'} />
              )}
            </div>
            <div className="form__row">
              <label className="form__label label" htmlFor="password">
                Password
              </label>
              <input
                className="form_input input"
                name="password"
                id="password"
                type="password"
                ref={register({
                  required: '🤯You must specify a password',
                  minLength: { value: 8, message: '😱Password must have at least 8 characters' },
                })}
                required
              />
              {errors.password && <ValidationMessage type={'error'} message={errors.password.message as string} />}
            </div>
            <div className="form__row">
              <label className="form__label label" htmlFor="repeatedPassword">
                Repeat password
              </label>
              <input
                className="form__input input"
                name="repeatedPassword"
                id="repeatedPassword"
                type="password"
                ref={register({ validate: value => value === password.current || '😨The passwords do not match' })}
                required
              />
              {errors.repeatedPassword && (
                <ValidationMessage type={'error'} message={errors.repeatedPassword.message as string} />
              )}
            </div>
            <button className="form__button" value="Wyślij" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};
