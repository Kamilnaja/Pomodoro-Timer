import { Action } from 'redux';
import { Tag, TagSearchResult } from '../../../../../types/tagsInterfaces';
import { fetchData } from '../../../shared/scripts/requests';
import { GET_TAGS, GET_TAGS_ERROR, GET_TAGS_SUCCESS, SET_CURRENT_TAG, TagsActionsTypes } from './tagsActions.types';

export const getTags = (): TagsActionsTypes => ({
  type: GET_TAGS,
});

export const getTagsSuccess = (payload: Tag[]): TagsActionsTypes => ({
  type: GET_TAGS_SUCCESS,
  payload,
});

export const getTagsError = (payload: any): TagsActionsTypes => ({
  type: GET_TAGS_ERROR,
  payload,
});

// payload - task id
export const setCurrentTag = (payload: string) => ({
  type: SET_CURRENT_TAG,
  payload,
});

// thunk
export const handleGetTags = () => async (dispatch: (args: Action) => void) => {
  dispatch(getTags());

  fetchData('tags')
    .then((payload: TagSearchResult) => dispatch(getTagsSuccess(payload.result)))
    .catch(err => dispatch(getTagsError(err)));
};
