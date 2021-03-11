import { Tag } from '../../../../types/tagsInterfaces';
import { AuthState } from '../../auth/store/interfaces/authState';
import { PomodoroCounterState } from '../store/interfaces/PomodoroCounterState';

export interface PomodoroCounterScreenProps {
  auth: AuthState;
  pomodoroCounter: PomodoroCounterState;
  handleSavePomodoro: (tag: Tag) => void;
  handleSetModePomodoro: () => void;
  handleSetModeBreak: (time: number) => void;
}
