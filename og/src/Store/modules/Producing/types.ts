export type I_ORDER = {
  number: string;
  id: number;
};

export type I_PRODUCING_STAGE = {
  order: I_ORDER;
};

export enum ActionTypes {
  PRODUCING_ADD_SET = "PRODUCING_ORDER_SET",
}
