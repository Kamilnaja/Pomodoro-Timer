import { AuthActions } from "../actions/auth.actions";
import { AuthAction } from "../interfaces/auth.action";

const initialState = {
  isLoading: false,
  error: false,
};

export const loginReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActions.SAVE_REGISTER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.SAVE_REGISTER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActions.SAVE_REGISTER_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "todo handle error",
      };
    default:
      return state;
  }
};
