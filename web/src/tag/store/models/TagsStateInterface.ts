import { Tag } from '../../../../../types/statsInterfaces';

export interface TagsState {
  isLoading: boolean;
  error: string;
  tags: Tag[];
  currentTag: string;
}
