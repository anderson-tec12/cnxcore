import { ActionTypes, I_LOGIN } from "./types";

export function LOGIN_GET(data: I_LOGIN) {
  return {
    type: ActionTypes.LOGIN_GET,
    payload: data,
  };
}

export function LOGIN_SUCCESS() {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
  };
}

export function LOGIN_ERROR_SET(value: boolean) {
  return {
    type: ActionTypes.LOGIN_ERROR,
    payload: value,
  };
}
