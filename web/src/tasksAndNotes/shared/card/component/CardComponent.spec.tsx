import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Task } from '../../../../../../types/tasksAndNotesInterfaces';
import { createTask } from '../../../testing/taskAndNotes.test.data';
import { CardComponent } from './CardComponent';

describe('CardComponent', () => {
  const addSubtask = jest.fn();
  const handleSave = jest.fn();
  const task: Task = createTask();
  const wrapper = shallow(<CardComponent addSubtask={addSubtask} handleSave={handleSave} task={task} />);

  it('should match snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
