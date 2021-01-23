export interface Registration extends Login {
  email: string;
}

export interface Login {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AuthError {
  code: ErrorCodes;
  message: string;
}

export enum ErrorCodes {
  USER_NOT_FOUND,
  USER_CURRENTLY_EXISTS,
  PASSWORD_INCORRECT,
  OTHER_ERROR,
}
