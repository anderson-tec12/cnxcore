import { AxiosResponse } from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { apiCore } from "../../../Services";
import { ENUMS_SET } from "./action";

import { ActionTypes } from "./types";

function* getEnums() {
  try {
    const user = "api/Production/Enumerator/GetUserAccessLevels";
    const quality =
      "api/Quality/Enumerator/GetQualityConstraintActionEnumerator";
    const checklist = "api/Production/Enumerator/GetOperationChecklistStatus";
    const setup = "api/Production/Enumerator/GetOperationSetupResultStatus";
    const station = "api/Production/Enumerator/GetStatusRetentive";

    const userData: AxiosResponse<any> = yield call(apiCore.get, user);
    const qualityData: AxiosResponse<any> = yield call(apiCore.get, quality);
    const checklistData: AxiosResponse<any> = yield call(
      apiCore.get,
      checklist
    );
    const setupData: AxiosResponse<any> = yield call(apiCore.get, setup);
    const stationData: AxiosResponse<any> = yield call(apiCore.get, station);

    const allEnuns = {
      alertsQualits: qualityData.data,
      checklistOperation: checklistData.data,
      setupOperation: setupData.data,
      stationRetentive: stationData.data,
      userAccess: userData.data,
    };

    yield put(ENUMS_SET(allEnuns));
  } catch (err: any) {
    console.dir(err);
  }
}

export default all([takeLatest(ActionTypes.ENUM_GET, getEnums)]);
