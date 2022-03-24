import { Reducer } from "redux";
import { I_ROUTE_STAGE, ActionTypes } from "./types";

import produce from "immer";

const INITIAL_STATE: I_ROUTE_STAGE = {
  view: "login",
  history: [],
};

const Router: Reducer<I_ROUTE_STAGE> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ROUTER_SET: {
        draft.view = action.payload.to;
        draft.history.push(action.payload.old);
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default Router;
