import { ActionTypes, I_STATION } from "./types";

export function STATIONS_GET() {
  return {
    type: ActionTypes.STATIONS_VALUES_GET,
  };
}

interface I_DTO_SET {
  stations: I_STATION[];
  loading: false;
}
export function STATIONS_SET(data: I_DTO_SET) {
  return {
    type: ActionTypes.STATIONS_VALUES_SET,
    payload: data,
  };
}

export function STATIONS_SET_ERROR(data: Boolean) {
  return {
    type: ActionTypes.STATIONS_ERROR_SET,
    payload: data,
  };
}
