import { Reducer } from "redux";
import { I_ENUMERATORS_STAGE, ActionTypes } from "./types";

import produce from "immer";

const INITIAL_STATE: I_ENUMERATORS_STAGE = {
  alertsQualits: [],
  checklistOperation: [],
  stationRetentive: [],
  userAccess: [],
  setupOperation: [],
};

const Enums: Reducer<I_ENUMERATORS_STAGE> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ENUM_SET: {
        draft.stationRetentive = action.payload.stationRetentive;
        draft.checklistOperation = action.payload.checklistOperation;
        draft.setupOperation = action.payload.setupOperation;
        draft.alertsQualits = action.payload.alertsQualits;
        draft.userAccess = action.payload.userAccess;

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default Enums;
