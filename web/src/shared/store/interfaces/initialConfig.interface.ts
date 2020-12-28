export interface InitialConfig {
  apiUrl: string;
  shortBreakTime: number;
  longBreakTime: number;
  pomodoroTime: number;
  refreshRate: number;
  user?: {
    firstName: string;
    lastName: string;
  };
}
