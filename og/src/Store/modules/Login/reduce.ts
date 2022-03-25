import { Reducer } from "redux";
import { I_LOGIN_STAGE, ActionTypes } from "./types";

import produce from "immer";

const INITIAL_STATE: I_LOGIN_STAGE = {
  isRequestLogin: false,
  loginData: {
    pass: "",
    user: "",
    station: 0,
  },
  error: false,
};

const Login: Reducer<I_LOGIN_STAGE> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOGIN_GET: {
        draft.isRequestLogin = true;
        draft.loginData = action.payload;

        break;
      }

      case ActionTypes.LOGIN_SUCCESS: {
        draft.isRequestLogin = false;

        break;
      }

      case ActionTypes.LOGIN_ERROR: {
        draft.isRequestLogin = false;
        draft.error = action.payload;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default Login;
