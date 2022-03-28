export type I_View =
  | "login"
  | "menu"
  | "userLogin"
  | "Config"
  | "Checklists"
  | "Users"
  | "Stops"
  | "Order"
  | "Operation"
  | "Helper"
  | "Files";

export interface I_ROUTE_STAGE {
  view: I_View;
  history: I_View[];
}

export enum ActionTypes {
  ROUTER_SET = "ROUTER_SET",
}
