import { useSelector } from "react-redux";
import { I_STAGE_GLOBAL } from "../../Store/types";
import { I_STATION } from "../../Store/modules/Station/types";

export function GET_STATION_ALL_HOOK() {
  const station = useSelector<I_STAGE_GLOBAL, I_STATION[]>((state) => {
    return state.stations.stations;
  });

  return station;
}
