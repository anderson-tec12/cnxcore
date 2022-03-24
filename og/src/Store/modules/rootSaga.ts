import { all } from "redux-saga/effects";
import stations from "./Station/sagas";
import login from "./Login/sagas";

export default function* rootSaga(): any {
  return yield all([stations, login]);
}
