import { Tag } from '../../../../types/tagsInterfaces';
import { TagsState } from '../../tag/store/models/TagsStateInterface';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface CounterComponentProps {
  counter: PomodoroCounterState;
  tags: TagsState;
  pause: () => void;
  run: () => void;
  end: () => void;
  handleSavePomodoro: (tag: Tag) => void;
  updateCounter: (time: number) => void;
}
