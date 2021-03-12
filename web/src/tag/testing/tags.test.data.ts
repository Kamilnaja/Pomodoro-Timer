import { Tag } from '../../../../types/tagsInterfaces';
import { TagsState } from '../store/models/TagsStateInterface';

export const createTags = (): Tag[] => [
  { id: '3', text: 'reading' },
  { id: '2', text: 'working at own project' },
  { id: '5', text: 'exercising' },
];

export const createEmptyTags = (): Tag[] => [];

export const createTagsState = (): TagsState => ({
  currentTag: '',
  error: 'hello error',
  isLoading: false,
  tags: createTags(),
});
