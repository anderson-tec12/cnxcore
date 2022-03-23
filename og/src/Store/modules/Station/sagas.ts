import { AxiosResponse } from "axios";
import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import { apiCore } from "../../../Services";
import { STATIONS_GET, STATIONS_SET, STATIONS_SET_ERROR } from "./actions";
import { ActionTypes, I_STATION } from "./types";

type I_STATIONS_GET = ReturnType<typeof STATIONS_GET>;
function* getStations(DTO: I_STATIONS_GET) {
  try {
    const data: AxiosResponse<I_STATION[]> = yield call(
      apiCore.get,
      `api/Production/Resource/Workstation/GetAvaliableWorkstations?length=100000`
    );

    const convertData = data.data.map((item) => {
      return {
        name: item.name,
        id: item.id,
      };
    });

    // throw new Error("TA NOIS");

    yield delay(1000);
    yield put(
      STATIONS_SET({
        loading: false,
        stations: convertData,
      })
    );
  } catch (err) {
    yield put(STATIONS_SET_ERROR(true));
  }
}

export default all([takeLatest(ActionTypes.STATIONS_VALUES_GET, getStations)]);
