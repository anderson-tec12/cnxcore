import { I_StationsState } from "./modules/Station/types";
import { I_LOGIN_STAGE } from "./modules/Login/types";
import { I_ROUTE_STAGE } from "./modules/Router/types";
import { I_USER_STAGE } from "./modules/User/types";
import { I_ENUMERATORS_STAGE } from "./modules/Enumerators/types";
import { I_PRODUCING_STAGE } from "./modules/Producing/types";

export interface I_STAGE_GLOBAL {
  stations: I_StationsState;
  Login: I_LOGIN_STAGE;
  Router: I_ROUTE_STAGE;
  User: I_USER_STAGE;
  Enums: I_ENUMERATORS_STAGE;
  Producing: I_PRODUCING_STAGE;
}
