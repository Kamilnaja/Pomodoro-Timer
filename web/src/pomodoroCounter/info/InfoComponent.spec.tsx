import { shallow } from 'enzyme';
import { createAuth, createCurrentState } from '../testing/pomodoroCounter.test.data';
import { InfoComponent } from './InfoComponent';

describe('InfoComponent', () => {
  it('Should render', () => {
    const infoComponent = shallow(<InfoComponent currentState={createCurrentState()} auth={createAuth()} />);

    expect(infoComponent).not.toBeNull();
  });
});
