import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CookiesInfoContainer from './CookiesInfoContainer';

describe('CookiesInfoContainer', () => {
  let store;
  let component: renderer.ReactTestRenderer;
  const mockStore = configureStore([thunk]);

  beforeEach(() => {
    store = mockStore({
      settings: {
        error: '',
      },
      auth: {
        isLoggedIn: false,
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <CookiesInfoContainer />
      </Provider>,
    );
  });

  it('should match snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
