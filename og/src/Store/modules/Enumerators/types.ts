export type I_TYPE_ENUM = {
  name: string;
  id: number;
};

export type I_ENUMERATORS_STAGE = {
  userAccess: I_TYPE_ENUM[];
  alertsQualits: I_TYPE_ENUM[];
  setupOperation: I_TYPE_ENUM[];
  checklistOperation: I_TYPE_ENUM[];
  stationRetentive: I_TYPE_ENUM[];
};

export enum ActionTypes {
  ENUM_GET = "ENUM_GET",
  ENUM_SET = "ENUM_SET",
}
