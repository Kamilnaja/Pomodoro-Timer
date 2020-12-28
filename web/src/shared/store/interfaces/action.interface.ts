export interface Action {
  type: string;
  payload: {
    pomodorosDoneToday: number;
    allPomodoros: number;
  };
}
