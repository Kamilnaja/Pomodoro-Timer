import { AuthState } from '../../auth/store/interfaces/authState';
import { TagsState } from '../store/models/TagsStateInterface';

export interface TagContainerProps {
  handleGetTags: () => void;
  setCurrentTag: (payload: string) => void;
  tagsState: TagsState;
  authState: AuthState;
}
