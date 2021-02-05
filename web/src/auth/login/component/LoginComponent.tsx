import { useForm } from 'react-hook-form';
import { ValidationMessage } from 'shared/components/validationMessage/ValidationMessage';
import { Login } from '../../../../../types/authInterfaces';
import { AuthState } from '../../store/interfaces/authState';
import './loginComponent.scss';

export interface LoginProps {
  handleSubmit: (data: Login) => void;
  auth: AuthState;
}

type FormData = {
  login: string;
  password: string;
};

export const LoginComponent = (props: LoginProps) => {
  const { register, errors, handleSubmit } = useForm<FormData>();
  const onSubmit = (loginData: Login) => {
    props.handleSubmit(loginData);
  };

  return (
    <div className="login">
      {props.auth.isSuccess ? (
        <div className="login__success">
          <ValidationMessage
            type={'success'}
            message="😀Login successfull, now close the modal and do some work!"
          ></ValidationMessage>
        </div>
      ) : (
        <div>
          {props.auth.error?.message && <ValidationMessage type={'error'} message={props.auth.error.message} />}
          <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__row">
              <label className="form__label label" htmlFor="login">
                User login
              </label>
              <input
                className="form__input input"
                type="text"
                name="login"
                id="login"
                required
                placeholder="John Doe"
                ref={register({ required: true })}
                autoFocus
              />
              {errors.login && <ValidationMessage type={'error'} message={'😰Login is required'} />}
            </div>
            <div className="form__row">
              <label className="form__label label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input input"
                type="password"
                name="password"
                id="password"
                required
                ref={register({ required: true })}
              />
              {errors.password && <ValidationMessage type={'error'} message={'😱Password is required'} />}
            </div>
            <button className="form__button" value="Wyślij" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
