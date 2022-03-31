import { useDispatch, useSelector } from "react-redux";
import { PRODUCING_ORDER } from "../../Store/modules/Producing/actions";
import { I_ORDER } from "../../Store/modules/Producing/types";
import { I_STAGE_GLOBAL } from "../../Store/types";

export function SET_PRODUCING_HOOK() {
  const dispatch = useDispatch();
  const order = useSelector<I_STAGE_GLOBAL, I_ORDER>(
    (stage) => stage.Producing.order
  );

  function setPRODUCING_ORDER(data: I_ORDER) {
    dispatch(PRODUCING_ORDER(data));
  }

  return { setPRODUCING_ORDER, order };
}
