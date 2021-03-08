import { savePomodoro } from './statsActions';
import { SAVE_POMODORO, StatsActionsTypes } from './statsActionsTypes';

describe('statsActions', () => {
  it('should return savePomodoro action', () => {
    const expectedAction: StatsActionsTypes = {
      type: SAVE_POMODORO,
    };

    expect(savePomodoro()).toEqual(expectedAction);
  });
});
