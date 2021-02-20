import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createAuthState } from '../../testing/auth.testing.data';
import { RegisterComponent } from './RegisterComponent';

describe('RegisterComponent', () => {
  let registerComponent = shallow(<RegisterComponent handleSubmit={() => {}} formState={createAuthState()} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(registerComponent)).toMatchSnapshot();
  });
});
