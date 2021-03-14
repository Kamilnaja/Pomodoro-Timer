import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createAuthState } from '../../testing/auth.testing.data';
import { Provider } from 'react-redux';
import { ConnectedRegisterContainer } from './RegisterContainer';

const mockStore = configureStore([thunk]);

describe('RegisterContainer', () => {
  let store;
  let component: renderer.ReactTestRenderer;

  beforeEach(() => {
    store = mockStore({
      auth: createAuthState,
    });

    component = renderer.create(
      <Provider store={store}>
        <ConnectedRegisterContainer />
      </Provider>,
    );
  });

  it('Should match the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
