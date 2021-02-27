import {
  AuthActionsTypes,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  RESET_FORM,
  SET_LOGGED_OUT,
} from '../actions/authActionsTypes';
import { AuthState } from '../interfaces/authState';
import { authInitialState } from './initialState';

export const authReducer = (state = authInitialState, action: AuthActionsTypes): AuthState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: null as any,
      };
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isLoggedIn: true,
        token: action.payload,
        error: null as any,
      };
    case RESET_FORM: //  maybe initial state for all
      return {
        ...state,
        isLoading: authInitialState.isLoading,
        isSuccess: authInitialState.isSuccess,
        error: null as any,
      };
    case SET_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};
