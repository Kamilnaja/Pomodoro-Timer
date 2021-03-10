import { TagsState } from '../store/models/TagsStateInterface';

export interface TagContainerProps {
  handleGetTags: () => void;
  tags: TagsState;
}
