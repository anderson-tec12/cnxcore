import { useSelector, useDispatch } from "react-redux";
import { I_STAGE_GLOBAL } from "../../../Store/types";
import { I_USER_STAGE } from "../../../Store/modules/User/types";
import { ROUTER_SET } from "../../../Store/modules/Router/actions";

import Button from "../../Components/Button";

import { Container } from "./styles";
export function UserLog() {
  const USER = useSelector<I_STAGE_GLOBAL, I_USER_STAGE>((state) => state.User);

  const dispatch = useDispatch();

  const handleToMenu = () => {
    dispatch(ROUTER_SET({ to: "menu", old: "userLogin" }));
  };

  return (
    <Container>
      <article>
        <h2>Usuario logado com sucesso</h2>

        <div>
          <span className="cicle">{USER.active.name.slice(0, 2)}</span>
        </div>

        <main>
          <span>{USER.active.name}</span>
          <span>{USER.active.email}</span>
          <Button viewName="Avançar" type="button" onClick={handleToMenu} />
        </main>
      </article>
    </Container>
  );
}
