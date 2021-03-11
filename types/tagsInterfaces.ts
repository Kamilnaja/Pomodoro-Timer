import { SearchResult } from './commonInterfaces';

export interface TagSearchResult extends SearchResult<Tag[]> {}

export interface Tag extends Partial<TagPartial> {}

interface TagPartial {
  id: string;
  text: string;
}
