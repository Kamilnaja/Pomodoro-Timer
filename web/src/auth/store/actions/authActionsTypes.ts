import { Login, Registration } from '../../../../../types/authInterfaces';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const RESET_FORM = 'RESET_FORM';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';

export interface RegisterAction {
  type: typeof REGISTER;
  payload: Registration;
}

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
}

export interface RegisterErrorAction {
  type: typeof REGISTER_ERROR;
  payload: any;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: Login;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

export interface LoginErrorAction {
  type: typeof LOGIN_ERROR;
  payload: any;
}

export interface ResetFormAction {
  type: typeof RESET_FORM;
}

export interface SetLoggedInAction {
  type: typeof SET_LOGGED_IN;
}

export interface SetLoggedOutAction {
  type: typeof SET_LOGGED_OUT;
}

export type AuthActionsTypes =
  | RegisterAction
  | RegisterSuccessAction
  | RegisterErrorAction
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | ResetFormAction
  | SetLoggedInAction
  | SetLoggedOutAction;
