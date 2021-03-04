import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import { createSettingsState } from '../../../settings/testing/settings.test.data';
import { createStatsSearchResult } from '../../testing/stats.test.data';
import { StatsComponent } from './StatsComponent';

describe('StatsComponent', () => {
  const handleGetStats = () => {};
  const settings: SettingsState = createSettingsState();

  let statsComponent = shallow(
    <StatsComponent
      stats={createStatsSearchResult()}
      handleGetStats={handleGetStats}
      settings={settings}
      handleGetSettings={() => {}}
      toggleDisplayDirection={() => {}}
      toggleDisplayEmptyDays={() => {}}
      handleSaveSettings={() => {}}
    />,
  );

  it('Should match snapshot', () => {
    expect(shallowToJson(statsComponent)).toMatchSnapshot();
  });
});
