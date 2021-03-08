import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('statsActions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('handleSavePomodoroAction', () => {});
});
