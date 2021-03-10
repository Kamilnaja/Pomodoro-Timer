import { Tag } from '../../../../../types/statsInterfaces';
import { TagsState } from '../models/TagsStateInterface';

export const tagsInitialState: TagsState = {
  isLoading: false,
  error: '',
  tags: [] as Tag[],
};
