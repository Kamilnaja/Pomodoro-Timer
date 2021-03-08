import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { SettingsState } from '../../../settings/store/interfaces/settingsInterfaces';
import { createSettingsState } from '../../../settings/testing/settings.test.data';
import { createStatsSearchResult } from '../../testing/stats.test.data';
import { StatsComponent } from './StatsComponent';

describe('StatsComponent', () => {
  let wrapper: ShallowWrapper;
  const handleGetStats = jest.fn();
  const handleGetSettings = jest.fn();
  const settings: SettingsState = createSettingsState();

  beforeEach(() => {
    wrapper = shallow(
      <StatsComponent
        handleGetStats={handleGetStats}
        handleGetSettings={handleGetSettings}
        toggleDisplayDirection={() => {}}
        toggleDisplayEmptyDays={() => {}}
        handleSaveSettings={() => {}}
        stats={createStatsSearchResult()}
        settings={settings}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should have settings header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('Should trigger next month action', () => {
    wrapper.find('.navigation__button--next').simulate('click');

    expect(handleGetStats).toHaveBeenCalledWith(2021, 3);
  });

  it('Should trigger previous month action', () => {
    wrapper.find('.navigation__button--prev').simulate('click');

    expect(handleGetStats).toHaveBeenCalledWith(2021, 2);
  });

  // todo - it each for next / previous
});
