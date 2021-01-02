import { SettingsActions } from "../actions/actions";

export interface SettingsAction {
  type: SettingsActions;
  payload: {
    isLoading: boolean;
    error: string;
  };
}
