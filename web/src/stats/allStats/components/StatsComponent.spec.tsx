import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createSettingsState } from '../../../settings/testing/settings.test.data';
import { createStatsSearchResult } from '../../testing/stats.test.data';
import { StatsComponent } from './StatsComponent';

describe('StatsComponent', () => {
  let statsComponent = shallow(
    <StatsComponent
      stats={createStatsSearchResult()}
      handleGetStats={() => {}}
      settings={createSettingsState()}
      handleGetSettings={() => {}}
      toggleDisplayDirection={() => {}}
      handleSaveSettings={() => {}}
    />,
  );

  it('Should match snapshot', () => {
    expect(shallowToJson(statsComponent)).toMatchSnapshot();
  });
});
