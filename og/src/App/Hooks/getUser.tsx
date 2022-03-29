import { useSelector } from "react-redux";
import { I_STAGE_GLOBAL } from "../../Store/types";
import { I_User } from "../../Store/modules/User/types";

export function User() {
  const user = useSelector<I_STAGE_GLOBAL, I_User>(
    (stage) => stage.User.active
  );

  return {
    user,
  };
}
