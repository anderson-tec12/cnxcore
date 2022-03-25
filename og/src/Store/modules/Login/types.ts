export type I_LOGIN = {
  user: string;
  pass: string;
  station: number;
};

export interface I_LOGIN_STAGE {
  loginData: I_LOGIN;
  isRequestLogin: Boolean;
  error: Boolean;
}

export enum ActionTypes {
  LOGIN_GET = "LOGIN_GET",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
}
