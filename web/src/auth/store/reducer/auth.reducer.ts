import { Action } from "redux";
import { AuthAction } from "../actions/auth.actions";
import { AuthState } from "../interfaces/auth.state";

export const initialState: AuthState = {
  isLoading: false,
  error: "",
  isSuccess: false,
};

export const authReducer = (
  state = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case AuthAction.SAVE_REGISTER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case AuthAction.SAVE_REGISTER_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case AuthAction.SAVE_REGISTER_DATA_SUCCESS:
      return {
        ...state,
        error: "Something went wrong",
        isLoading: false,
        isSuccess: true,
      };

    default:
      return state;
  }
};
