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
export function Menu() {
  return (
    <Container>
      <header>
        <span>Menu</span>

        <IoMdNotifications />
      </header>

      <div>
        <ul>
          <li>
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
