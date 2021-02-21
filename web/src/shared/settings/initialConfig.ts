import { InitialConfig } from './InitialConfigInterface';

const prod = {
  url: {
    API_URL: 'https://pure-savannah-33150.herokuapp.com/api',
  },
};

const dev = {
  url: {
    API_URL: 'http://localhost:8080/api',
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;

const url = new URL(window.location.href);
const time = Number(url.searchParams.get('time'));

export const initialConfig: InitialConfig = {
  shortBreakTime: 5 * 60 * 1000,
  longBreakTime: 15 * 60 * 1000,
  pomodoroTime: time ? time : 25 * 60 * 1000,
  refreshRate: 1000,
};

export const isCookieConsentAcceptedKey = 'isCookieConsentAccepted';
