import { Tag } from '../../../../../types/tagsInterfaces';

export interface TagsState {
  isLoading: boolean;
  error: string;
  tags: Tag[];
  currentTag: string;
}
