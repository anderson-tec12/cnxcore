import { ActionTypes, I_ENUMERATORS_STAGE } from "./types";

export function ENUMS_GET() {
  return {
    type: ActionTypes.ENUM_GET,
  };
}

export function ENUMS_SET(data: I_ENUMERATORS_STAGE) {
  return {
    type: ActionTypes.ENUM_SET,
    payload: data,
  };
}
