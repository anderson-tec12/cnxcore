import { Container } from "./styles";
import { IoMdNotifications } from "react-icons/io";
import { BiChevronLeft } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";

import { I_STAGE_GLOBAL } from "../../../Store/types";
import { I_USER_STAGE } from "../../../Store/modules/User/types";
import { USER_REMOVE_SET } from "../../../Store/modules/User/actions";
import { I_TYPE_ENUM } from "../../../Store/modules/Enumerators/types";
import { useDispatch, useSelector } from "react-redux";

import { ROUTER_SET } from "../../../Store/modules/Router/actions";

import { v4 } from "uuid";
import { useEffect } from "react";

type I_STAGE = {
  USERS: I_USER_STAGE;
  ENUM: I_TYPE_ENUM[];
};
export function Users() {
  const dispatch = useDispatch();
  const { ENUM, USERS } = useSelector<I_STAGE_GLOBAL, I_STAGE>((stage) => {
    return {
      ENUM: stage.Enums.userAccess,
      USERS: stage.User,
    };
  });

  const USER_TO_VIEW_LIST = USERS.usersLogin.map((user) => {
    const nivelUser = ENUM.find((e) => e.id === user.level);

    console.log("olha ", nivelUser, user.level, ENUM);

    const newUser = {
      code: user.code,
      email: user.email,
      id: user.id,
      level: nivelUser ? nivelUser.name : "",
      name: user.name,
    };

    return newUser;
  });

  const handle_signOut = (value: number) => {
    dispatch(USER_REMOVE_SET(value));

    console.log(USERS.usersLogin);
  };

  useEffect(() => {
    if (USERS.usersLogin.length === 0) {
      dispatch(ROUTER_SET({ to: "login", old: "menu" }));
    }
  }, [USERS, dispatch]);

  return (
    <Container>
      <header>
        <div>
          <BiChevronLeft />
          <span>Usuarios</span>
        </div>

        <IoMdNotifications />
      </header>

      <main>
        {USER_TO_VIEW_LIST.map((user) => (
          <div key={v4()}>
            <span className="ball">{user.name.slice(0, 2)}</span>
            <span className="name">{user.name}</span>
            <span className="type">{user.level}</span>
            <span className="exit" onClick={() => handle_signOut(user.id)}>
              <RiLogoutBoxLine />
            </span>
          </div>
        ))}
      </main>
    </Container>
  );
}
