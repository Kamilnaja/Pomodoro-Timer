import { ActionWithPayload } from '../../../shared/store/interfaces/actions/action.interface';
import { AuthAction } from '../actions/auth.actions';
import { AuthState } from '../interfaces/auth.state';

export const initialState: AuthState = {
  isLoading: false,
  isSuccess: false,
  isLoggedIn: false,
  error: null as any,
  token: '',
};

export const authReducer = (state = initialState, action: ActionWithPayload<AuthAction, any>): AuthState => {
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
        isLoading: initialState.isLoading,
        isSuccess: initialState.isSuccess,
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
