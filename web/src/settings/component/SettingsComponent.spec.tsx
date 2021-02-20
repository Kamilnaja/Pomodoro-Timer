import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { SettingsComponent } from './SettingsComponent';

describe('SettingsComponent', () => {
  const component = shallow(<SettingsComponent />);

  it('Should match snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
