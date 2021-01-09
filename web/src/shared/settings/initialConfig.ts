import { InitialConfig } from "../store/interfaces/initialConfig.interface";

export const initialConfig: InitialConfig = {
  shortBreakTime: 5 * 60 * 1000,
  longBreakTime: 15 * 60 * 1000,
  pomodoroTime: 25 * 60 * 1000,
  refreshRate: 1000,
  apiUrl: "http://localhost:8080/api",
};
