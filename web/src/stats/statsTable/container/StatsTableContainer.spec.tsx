import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Settings } from '../../../../../types/settingsInterface';
import { createSettingsState } from '../../../settings/testing/settings.test.data';
import { createPomodorosDoneInDay } from '../../testing/stats.test.data';
import StatsTableContainer from './StatsTableContainer';

describe('StatsTableContainer', () => {
  let wrapper = shallow(
    <StatsTableContainer
      pageMonth={11}
      pageYear={2020}
      pomodoros={createPomodorosDoneInDay()}
      settingsState={createSettingsState()}
      toggleDisplayDirection={() => {}}
      handleGetSettings={() => {}}
      handleSaveSettings={() => {}}
    />,
  );

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
