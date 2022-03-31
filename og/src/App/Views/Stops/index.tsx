import { IoMdNotifications, IoIosSearch } from "react-icons/io";
import { BiChevronLeft } from "react-icons/bi";
import { Container, Modal, Background } from "./styles";
import { GET_ROUTER_HOOK } from "../../Hooks/getView";
import { useState } from "react";

export function Stops() {
  const [modalActive, setModalActive] = useState(false);
  const { toRender } = GET_ROUTER_HOOK();

  const handleOpenStop = () => {
    setModalActive(true);
  };

  return (
    <Container modalOpen={modalActive}>
      <header>
        <div
          onClick={() => {
            toRender("Order", "menu");
          }}
        >
          <BiChevronLeft />
          <span>Parada Programada </span>
        </div>

        <IoMdNotifications />
      </header>

      <main>
        <div className="header-main">
          <div className="search-box">
            <input type="text" />
            <IoIosSearch />
          </div>
        </div>

        <ul>
          <li onClick={handleOpenStop}>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>

          <li>
            <span>PROG01</span>
            <span>Pausa para o café</span>
          </li>
        </ul>
      </main>

      {modalActive && <Background />}

      {modalActive && (
        <Modal>
          <div className="desc">
            <span>Parada do tipo</span>
            <span>PROG03 - DDS</span>
          </div>

          <div className="action">
            <button onClick={() => setModalActive(false)}>Cacelar</button>
            <button onClick={() => toRender("Warning", "Stops")}>
              Confirmar
            </button>
          </div>
        </Modal>
      )}
    </Container>
  );
}
