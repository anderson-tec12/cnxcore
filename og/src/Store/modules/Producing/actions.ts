import { ActionTypes, I_ORDER } from "./types";

export function PRODUCING_ORDER(data: I_ORDER) {
  return {
    type: ActionTypes.PRODUCING_ADD_SET,
    payload: data,
  };
}
