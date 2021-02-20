import { authReducer } from './authReducer';
import { authInitialState } from './initialState';

describe('AuthReducer', () => {
  it('should render the initial state', () => {
    expect(authReducer(undefined, null)).toEqual(authInitialState);
  });
});
