import { Registration } from "../../../../../types/interfaces";
import { AuthActions } from "../actions/auth.actions";

export interface AuthAction {
  type: AuthActions;
  payload: Registration;
}
