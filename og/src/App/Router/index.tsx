import { useSelector } from "react-redux";
import { I_STAGE_GLOBAL } from "../../Store/types";
import { I_ROUTE_STAGE } from "../../Store/modules/Router/types";

import { SingIn } from "../Views/SingIn";
import { Menu } from "../Views/Menu";
import { UserLog } from "../Views/UserLog";

export function Router() {
  const Router = useSelector<I_STAGE_GLOBAL, I_ROUTE_STAGE>(
    (state) => state.Router
  );

  switch (Router.view) {
    case "login": {
      return <SingIn />;
    }

    case "menu": {
      return <Menu />;
    }

    case "userLogin": {
      return <UserLog />;
    }

    default:
      return <SingIn />;
  }
}
