import { Action } from "redux";
import { AuthAction } from "../actions/auth.actions";
import { AuthState } from "../interfaces/auth.state";

export const initialState: AuthState = {
  isLoading: false,
  error: "",
  isSuccess: false,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action: Action): AuthState => {
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
        error: "something went wrong!",
      };
    case AuthAction.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
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
        error: "something went wrong!",
      };
    case AuthAction.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isLoggedIn: true,
      };
    case AuthAction.RESET_FORM:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isSuccess: initialState.isSuccess,
      };
    default:
      return state;
  }
};
