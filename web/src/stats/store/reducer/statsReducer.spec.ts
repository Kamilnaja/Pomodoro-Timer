import { initialState, statsReducer } from './statsReducer';

describe('statsReducer', () => {
  it('should render the initial state', () => {
    expect(statsReducer(undefined, { type: null })).toEqual(initialState);
  });
});
