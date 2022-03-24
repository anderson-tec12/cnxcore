import { Reducer } from "redux";
import { I_USER_STAGE, ActionTypes } from "./types";

import produce from "immer";

const INITIAL_STATE: I_USER_STAGE = {
  active: {
    code: "",
    id: 0,
    name: "",
    token: "",
    email: "",
  },
  usersLogin: [],
};

const User: Reducer<I_USER_STAGE> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.USER_ADD_SET: {
        draft.active = action.payload;
        draft.usersLogin.push(action.payload);
        break;
      }

      case ActionTypes.USER_REMOVE_SET: {
        const users = draft.usersLogin.filter(
          (item) => item.id !== action.payload
        );
        draft.usersLogin = users;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default User;
