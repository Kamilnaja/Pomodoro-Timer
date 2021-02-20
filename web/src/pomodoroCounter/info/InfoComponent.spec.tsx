import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createAuth, createCurrentState } from '../testing/pomodoroCounter.test.data';
import { InfoComponent } from './InfoComponent';

describe('InfoComponent', () => {
  const infoComponent = shallow(<InfoComponent currentState={createCurrentState()} auth={createAuth()} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(infoComponent)).toMatchSnapshot();
  });
});
