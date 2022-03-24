export type I_View = "login" | "menu" | "userLogin";

export interface I_ROUTE_STAGE {
  view: I_View;
  history: string[];
}

export enum ActionTypes {
  ROUTER_SET = "ROUTER_SET",
}
