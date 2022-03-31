import { useSelector } from "react-redux";
import { I_STAGE_GLOBAL } from "../../Store/types";
import { I_ROUTE_STAGE } from "../../Store/modules/Router/types";

import { SingIn } from "../Views/SingIn";
import { Menu } from "../Views/Menu";
import { UserLog } from "../Views/UserLog";
import { Checklists } from "../Views/Checklists";
import { Config } from "../Views/Config";
import { Files } from "../Views/Files";
import { Helper } from "../Views/Helper";
import { Operation } from "../Views/Operation";
import { Order } from "../Views/Order";
import { Stops } from "../Views/Stops";
import { Users } from "../Views/Users";
import { OperationList } from "../Views/OperationList";
import { Warning } from "../Views/Warning";
import { Appointments } from "../Views/Appointments";

export function Router() {
  const Router = useSelector<I_STAGE_GLOBAL, I_ROUTE_STAGE>(
    (state) => state.Router
  );

  switch (Router.view) {
    case "Config": {
      return <Config />;
    }
    case "Appointments": {
      return <Appointments />;
    }

    case "Files": {
      return <Files />;
    }

    case "Helper": {
      return <Helper />;
    }

    case "Operation": {
      return <Operation />;
    }

    case "Order": {
      return <Order />;
    }

    case "Order/OperationList": {
      return <OperationList />;
    }

    case "Stops": {
      return <Stops />;
    }

    case "Users": {
      return <Users />;
    }

    case "login": {
      return <SingIn />;
    }

    case "menu": {
      return <Menu />;
    }

    case "userLogin": {
      return <UserLog />;
    }

    case "Checklists": {
      return <Checklists />;
    }
    case "Warning": {
      return <Warning />;
    }

    default:
      return <SingIn />;
  }
}
