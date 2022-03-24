export type I_STATION = {
  name: string;
  id: number;
};

export interface I_StationsState {
  stations: I_STATION[];
  loading: boolean;
  error: boolean;
}

export enum ActionTypes {
  STATIONS_VALUES_SET = "STATIONS_VALUES_SET",
  STATIONS_VALUES_GET = "STATIONS_VALUES_GET",
  STATIONS_LOAD_SET = "STATIONS_LOAD_SET",
  STATIONS_ERROR_SET = "STATIONS_ERROR_SET",
}
