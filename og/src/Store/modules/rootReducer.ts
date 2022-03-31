import { combineReducers } from "redux";
import stations from "./Station/reducer";
import Login from "./Login/reduce";
import Router from "./Router/reduce";
import User from "./User/reduce";
import Enums from "./Enumerators/reduce";
import Producing from "./Producing/reduce";

export default combineReducers({
  stations,
  Login,
  Router,
  User,
  Enums,
  Producing,
});
