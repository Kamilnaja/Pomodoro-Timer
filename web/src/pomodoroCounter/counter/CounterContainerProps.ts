import { Tag } from '../../../../types/tagsInterfaces';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface CounterComponentProps {
  counter: PomodoroCounterState;
  pause: () => void;
  run: () => void;
  end: () => void;
  handleSavePomodoro: (tag: Tag) => void;
  updateCounter: (time: number) => void;
}
