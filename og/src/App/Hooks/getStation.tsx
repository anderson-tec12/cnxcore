import { useSelector } from "react-redux";
import { I_STAGE_GLOBAL } from "../../Store/types";

export function GET_STATION_HOOK() {
  const stationSelected = useSelector<I_STAGE_GLOBAL>((state) => {
    return state.Login.loginData.station ? state.Login.loginData.station : 0;
  });

  return stationSelected;
}
