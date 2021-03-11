import { Tag } from '../../../../../types/tagsInterfaces';

export const GET_TAGS = 'GET_TAGS';
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const GET_TAGS_ERROR = 'GET_TAGS_ERROR';
export const SET_CURRENT_TAG = 'SET_CURRENT_TAG';

export interface GetTags {
  type: typeof GET_TAGS;
}

export interface GetTagsSuccess {
  type: typeof GET_TAGS_SUCCESS;
  payload: Tag[];
}

export interface GetTagsError {
  type: typeof GET_TAGS_ERROR;
  payload: any;
}

export interface SetCurrentTag {
  type: typeof SET_CURRENT_TAG;
  payload: string;
}

export type TagsActionsTypes = GetTags | GetTagsSuccess | GetTagsError | SetCurrentTag;