import { shallow } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { ReactComponentElement } from 'react';
import { createTasks } from '../../testing/taskAndNotes.test.data';
import { TodosComponent } from './TodosComponent';

describe('TodosComponent', () => {
  let wrapper = shallow(<TodosComponent todos={createTasks()} isAddingTaskActive={true} />);

  it('Should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
