export interface Registration extends Login {
  email: string;
}

export interface Login {
  login: string;
  password: string;
}

export interface Error {
  code: "string";
  errno: number;
}
