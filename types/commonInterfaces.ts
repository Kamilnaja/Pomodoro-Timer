export interface SearchResult<T> {
  result: T;
}

export interface ResultInPeriod {
  hasPreviousPeriod: boolean;
  hasNextPeriod: boolean;
}
