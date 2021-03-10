import { Action } from 'redux';
import { Tag } from '../../../../../types/statsInterfaces';
import { fetchData } from '../../../shared/scripts/requests';
import { GET_TAGS, GET_TAGS_ERROR, GET_TAGS_SUCCESS, TagActionTypes } from './tagActions.types';

export const getTags = (): TagActionTypes => ({
  type: GET_TAGS,
});

export const getTagsSuccess = (payload: Tag[]): TagActionTypes => ({
  type: GET_TAGS_SUCCESS,
  payload,
});

export const getTagsError = (payload: any): TagActionTypes => ({
  type: GET_TAGS_ERROR,
  payload,
});

// thunk
export const handleGetTags = () => async (dispatch: (args: Action) => void) => {
  dispatch(getTags());

  fetchData(`tags`)
    .then((payload: Tag[]) => dispatch(getTagsSuccess(payload)))
    .catch(err => dispatch(getTagsError(err)));
};
