import { InitialConfig } from "../store/interfaces/initialConfig.interface";

const prod = {
  url: {
    API_URL: "https://pure-savannah-33150.herokuapp.com/api",
  },
};

const dev = {
  url: {
    API_URL: "http://localhost:8080/api",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;

export const initialConfig: InitialConfig = {
  shortBreakTime: 5 * 60 * 1000,
  longBreakTime: 15 * 60 * 1000,
  pomodoroTime: 25 * 60 * 1000,
  refreshRate: 1000,
};
