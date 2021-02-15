import { ActionWithPayload } from '../../../shared/store/interfaces/actions/actionInterface';
import { AuthAction } from '../actions/authActions';
import { AuthState } from '../interfaces/authState';
import { authInitialState } from './initialState';

export const authReducer = (state = authInitialState, action: ActionWithPayload<AuthAction, any>): AuthState => {
  switch (action.type) {
    case AuthAction.REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case AuthAction.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthAction.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: null as any,
      };
    case AuthAction.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case AuthAction.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthAction.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isLoggedIn: true,
        token: action.payload,
        error: null as any,
      };
    case AuthAction.RESET_FORM:
      return {
        ...state,
        isLoading: authInitialState.isLoading,
        isSuccess: authInitialState.isSuccess,
        error: null as any,
      };
    case AuthAction.SET_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};
