export interface InitialConfig {
  shortBreakTime: number;
  longBreakTime: number;
  pomodoroTime: number;
  refreshRate: number;
  user?: {
    firstName: string;
    lastName: string;
  };
}
