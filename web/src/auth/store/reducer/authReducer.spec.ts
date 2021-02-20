import { authReducer } from './authReducer';
import { authInitialState } from './initialState';

describe('authReducer', () => {
  it('should render the initial state', () => {
    expect(authReducer(undefined, { type: null })).toEqual(authInitialState);
  });
});
