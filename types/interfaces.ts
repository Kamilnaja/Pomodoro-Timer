export interface Registration extends Login {
  email: string;
}

export interface Login {
  login: string;
  password: string;
}
