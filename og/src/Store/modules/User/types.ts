export type I_User = {
  name: string;
  token: string;
  id: number;
  code: string;
  email: string;
  level: number;
};

export type I_USER_STAGE = {
  active: I_User;
  usersLogin: I_User[];
};

export enum ActionTypes {
  USER_ADD_SET = "USER_ADD_SET",
  USER_REMOVE_SET = "USER_REMOVE_SET",
}
