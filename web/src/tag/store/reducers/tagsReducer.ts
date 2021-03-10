import { tagsInitialState } from './tagsInitialState';
import { GET_TAGS, GET_TAGS_ERROR, GET_TAGS_SUCCESS, TagsActionsTypes } from '../actions/tagsActions.types';

export const tagsReducer = (state = tagsInitialState, action: TagsActionsTypes) => {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tags: action.payload,
      };
    case GET_TAGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
