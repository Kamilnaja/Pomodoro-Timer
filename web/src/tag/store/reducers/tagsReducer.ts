import {
  GET_TAGS,
  GET_TAGS_ERROR,
  GET_TAGS_SUCCESS,
  SET_CURRENT_TAG,
  TagsActionsTypes,
} from '../actions/tagsActions.types';
import { tagsInitialState } from './tagsInitialState';

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
        currentTag: action.payload[0].id as string,
      };
    case GET_TAGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_CURRENT_TAG:
      return {
        ...state,
        currentTag: action.payload,
      };
    default:
      return state;
  }
};
