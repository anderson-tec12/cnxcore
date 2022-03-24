import { AxiosResponse } from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { apiCore } from "../../../Services";
import { LOGIN_GET, LOGIN_SUCCESS } from "./actions";
import { ROUTER_SET } from "../Router/actions";
import { USER_ADD_SET } from "../User/actions";
import { ActionTypes } from "./types";

type I_STATIONS_GET = ReturnType<typeof LOGIN_GET>;

function* getLogin(DTO: I_STATIONS_GET) {
  try {
    const url = "api/Production/OG/User/Login";

    const data: AxiosResponse<any> = yield call(apiCore.post, url, {
      password: DTO.payload.pass,
      username: DTO.payload.user,
      workstationId: 161,
    });

    yield put(LOGIN_SUCCESS());

    yield put(
      USER_ADD_SET({
        code: data.data.userModel.username,
        name: data.data.userModel.name,
        id: data.data.userModel.id,
        token: data.data.token,
        email: data.data.userModel.email,
      })
    );

    yield put(
      ROUTER_SET({
        to: "userLogin",
        old: "login",
      })
    );
  } catch (err) {
    alert("error");
    console.log(err);
  }
}

export default all([takeLatest(ActionTypes.LOGIN_GET, getLogin)]);
