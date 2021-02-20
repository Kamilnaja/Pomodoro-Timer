import { shallow } from 'enzyme';
import { createAuthState } from '../../testing/auth.testing.data';
import { RegisterComponent } from './RegisterComponent';

describe('RegisterComponent', () => {
  let registerComponent = shallow(<RegisterComponent handleSubmit={() => {}} formState={createAuthState()} />);

  it('Should create', () => {
    expect(registerComponent).not.toBeNull();
  });
});
