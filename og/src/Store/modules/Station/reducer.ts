import { Reducer } from "redux";
import { I_StationsState, ActionTypes } from "./types";

import produce from "immer";

const INITIAL_STATE: I_StationsState = {
  error: false,
  stations: [],
  loading: true,
};

const Stations: Reducer<I_StationsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.STATIONS_VALUES_SET: {
        draft.stations = action.payload.stations;
        draft.loading = false;
        break;
      }

      case ActionTypes.STATIONS_ERROR_SET: {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default Stations;
