import { Reducer } from "redux";
import { I_PRODUCING_STAGE, ActionTypes } from "./types";

import produce from "immer";

const INITIAL_STATE: I_PRODUCING_STAGE = {
  order: {
    id: 0,
    number: "",
  },
};

const Producing: Reducer<I_PRODUCING_STAGE> = (
  state = INITIAL_STATE,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.PRODUCING_ADD_SET: {
        draft.order = action.payload;

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default Producing;
