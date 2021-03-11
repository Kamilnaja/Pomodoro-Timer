import { Tag } from '../../../../types/tagsInterfaces';

export const createTags = (): Tag[] => [
  { id: '3', text: 'reading' },
  { id: '2', text: 'working at own project' },
  { id: '5', text: 'exercising' },
];

export const createEmptyTags = (): Tag[] => [];
