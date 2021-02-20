import { shallow } from 'enzyme';
import { createStats } from '../../testing/stats.test.data';
import { StatsComponent } from './StatsComponent';
import { shallowToJson } from 'enzyme-to-json';

describe('StatsComponent', () => {
  let statsComponent = shallow(<StatsComponent stats={createStats()} handleGetStats={() => {}} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(statsComponent)).toMatchSnapshot();
  });
});
