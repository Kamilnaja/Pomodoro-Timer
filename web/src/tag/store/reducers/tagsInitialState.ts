import { Tag } from '../../../../../types/tagsInterfaces';
import { TagsState } from '../models/TagsStateInterface';

export const tagsInitialState: TagsState = {
  isLoading: false,
  error: '',
  tags: [] as Tag[],
  currentTag: '',
};
