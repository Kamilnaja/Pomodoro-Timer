export interface Registration {
  name: string;
  email: string;
  password: string;
}

export interface Error {
  code: "string";
  errno: number;
}
