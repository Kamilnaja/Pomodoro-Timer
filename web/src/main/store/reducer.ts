// todo - stub
import { SETTINGS_SAVED } from "./actions";

export const mainState = (state = {}, action: any) => {
  switch (action.type) {
    case SETTINGS_SAVED:
      return {
        ...state,
        article: action.payload[0].article,
        comments: action.payload[1].comments,
      };
    default:
      return state;
  }
};
