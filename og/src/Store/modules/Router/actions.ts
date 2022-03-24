import { ActionTypes, I_View } from "./types";

export function ROUTER_SET(data: { to: I_View; old: I_View }) {
  return {
    type: ActionTypes.ROUTER_SET,
    payload: data,
  };
}
