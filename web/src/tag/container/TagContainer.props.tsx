import { TagsState } from '../store/models/TagsStateInterface';

export interface TagContainerProps {
  handleGetTags: () => void;
  setCurrentTag: (payload: string) => void;
  tags: TagsState;
}
