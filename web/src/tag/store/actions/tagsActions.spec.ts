import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createTags } from '../../testing/tags.test.data';
import * as actions from './tagsActions';
import { GET_TAGS, GET_TAGS_ERROR, GET_TAGS_SUCCESS, SET_CURRENT_TAG, TagsActionsTypes } from './tagsActions.types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tagsActions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const store = mockStore({ tags: [] });

  it('should create getTags', () => {
    const expected: TagsActionsTypes = {
      type: GET_TAGS,
    };

    expect(actions.getTags()).toEqual(expected);
  });

  it('should create getTagsSuccess', () => {
    const tags = createTags();

    const expected: TagsActionsTypes = {
      type: GET_TAGS_SUCCESS,
      payload: tags,
    };

    expect(actions.getTagsSuccess(tags)).toEqual(expected);
  });

  it('should create getTagsError', () => {
    const error = 'error';

    const expected: TagsActionsTypes = {
      type: GET_TAGS_ERROR,
      payload: error,
    };

    expect(actions.getTagsError(error)).toEqual(expected);
  });

  it('should return setCurrentTag', () => {
    const payload = 'workin';

    const expected: TagsActionsTypes = {
      type: SET_CURRENT_TAG,
      payload,
    };

    expect(actions.setCurrentTag(payload)).toEqual(expected);
  });

  it('should works for handleGetTodayTags', () => {
    const expectedActions: TagsActionsTypes[] = [
      {
        type: GET_TAGS,
      },
    ];

    return store.dispatch(actions.handleGetTags() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
