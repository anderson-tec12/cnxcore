import { useDispatch } from "react-redux";
import { ROUTER_SET } from "../../Store/modules/Router/actions";
import { I_View } from "../../Store/modules/Router/types";

export function GET_ROUTER_HOOK() {
  const dispatch = useDispatch();

  const toRender = (to: I_View, old: I_View) => {
    dispatch(ROUTER_SET({ to, old }));
  };

  return {
    toRender,
  };
}
