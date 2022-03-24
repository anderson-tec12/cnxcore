import { ActionTypes, I_User } from "./types";

export function USER_ADD_SET(data: I_User) {
  return {
    type: ActionTypes.USER_ADD_SET,
    payload: data,
  };
}

export function USER_REMOVE_SET(data: number) {
  return {
    type: ActionTypes.USER_REMOVE_SET,
    payload: data,
  };
}
