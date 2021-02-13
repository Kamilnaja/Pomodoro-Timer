import { shallow } from 'enzyme';
import { SettingsComponent } from './SettingsComponent';

test('Should render', () => {
  const component = shallow(<SettingsComponent />);

  expect(component).not.toBeNull();
});
