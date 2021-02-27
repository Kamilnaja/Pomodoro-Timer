import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createAuthState } from '../../testing/auth.testing.data';
import { Provider } from 'react-redux';
import RegisterContainer from './RegisterContainer';

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
        <RegisterContainer />
      </Provider>,
    );
  });

  it('Should match the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
