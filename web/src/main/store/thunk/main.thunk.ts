import { initialConfig } from "../../../shared/settings/initialConfig";
import { incrementPomodoros } from "../../../stats/store/actions/stats.actions";
import { savePomodoro, savePomodoroError } from "../actions/actions";
// todo - different versions for prod etc
const API_URL = initialConfig.apiUrl;

const makePostRequest = () =>
  fetch(API_URL + "/pomodoros", {
    method: "POST",
  });

export const handleErrors = (response: any): Promise<any> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const savePomodoroThunk = () => (dispatch: Function) => {
  dispatch(savePomodoro());

  return makePostRequest()
    .then(handleErrors)
    .then(() => {
      dispatch(incrementPomodoros());
    })
    .catch((error) => dispatch(savePomodoroError(error)));
};
