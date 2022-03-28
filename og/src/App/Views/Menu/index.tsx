import { Container } from "./styles";
import { IoMdNotifications } from "react-icons/io";

import { FaRegListAlt } from "react-icons/fa";
import { FaCogs, FaUserAlt } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { AiFillFolder } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";
import { CgListTree } from "react-icons/cg";
import { VscChecklist, VscSearchStop } from "react-icons/vsc";
import { FaStepForward } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { ROUTER_SET } from "../../../Store/modules/Router/actions";
import { I_View, I_ROUTE_STAGE } from "../../../Store/modules/Router/types";
import { I_STAGE_GLOBAL } from "../../../Store/types";

export function Menu() {
  const ROUTE = useSelector<I_STAGE_GLOBAL, I_ROUTE_STAGE>(
    (stage) => stage.Router
  );
  const dispatch = useDispatch();

  function toView(value: I_View) {
    const lastPosition = ROUTE.history.length;
    const isEqual = ROUTE.history[lastPosition - 1] === value;

    // verifica se a nova rota é igual a ultima se for vai pegar a penultima
    const oldRouter = isEqual
      ? ROUTE.history[ROUTE.history.length - 2]
      : ROUTE.history[ROUTE.history.length - 1];

    dispatch(ROUTER_SET({ to: value, old: oldRouter }));
  }

  return (
    <Container>
      <header>
        <span>Menu</span>

        <IoMdNotifications />
      </header>

      <div>
        <ul>
          <li onClick={() => toView("Users")}>
            <FaUserAlt />
            <span>Usuarios</span>
          </li>
          <li>
            <FaRegListAlt />
            <span>Ordem</span>
          </li>
          <li>
            <FaStepForward />
            <span>Operação</span>
          </li>
          <li>
            <IoMdHelpCircle />
            <span>Ajuda</span>
          </li>
          <li>
            <VscSearchStop />
            <span>Consultar paradas</span>
          </li>
          <li>
            <AiFillFolder />
            <span>Documentos</span>
          </li>
          <li>
            <VscChecklist />
            <span>Checklist</span>
          </li>
          <li className="disabled">
            <BiCheckShield />
            <span>Qualidade</span>
          </li>
          <li className="disabled">
            <CgListTree />
            <span>Monitor de recursos</span>
          </li>
          <li>
            <FaCogs />
            <span>Configuração</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}
