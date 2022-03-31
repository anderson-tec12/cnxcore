import { IoMdNotifications } from "react-icons/io";
import { BiChevronLeft } from "react-icons/bi";

import { GET_ROUTER_HOOK } from "../../Hooks/getView";

import { Container } from "./styles";

export function Operation() {
  const { toRender } = GET_ROUTER_HOOK();
  return (
    <Container>
      <header>
        <div
          onClick={() => {
            toRender("Order", "menu");
          }}
        >
          <BiChevronLeft />
          <span>Ordem </span>
          <span style={{ margin: "0px 4px" }}>/</span>

          <span>Operação</span>
        </div>

        <IoMdNotifications />
      </header>

      <main>
        <div className="controllers">
          <button>iniciar</button>
          <button
            type="button"
            onClick={() => {
              toRender("Appointments", "Operation");
            }}
          >
            Apontar
          </button>
        </div>

        <div className="info">
          <div className="row workstation">
            <div className="station">estação</div>
            <div className="statusWorkstation">Sem ordem</div>
            <div className="turn">Turno 1</div>
          </div>
          <div className="row">
            <div className="divisor">
              <span>Ordem</span>
              <span className="value">112312312313</span>
            </div>

            <div className="divisor">
              <span>Operação</span>
              <span className="value">112312312313</span>
            </div>
            <div className="status-operator">Liberado</div>
          </div>
        </div>

        <div className="info-plus">
          <div className="row">
            <div className="divisor1 ">
              <span>Produto</span>
              <span className="value">112312312313</span>
            </div>

            <div className="divisor2">
              <span>T.Parada</span>
              <span className="value">112312312313</span>
            </div>

            <div className="">
              <span>T.Prod</span>
              <span className="value">112312312313</span>
            </div>
          </div>

          <div className="row">
            <div className="divisor1 ">
              <span>Dt Inicio</span>
              <span className="value">----</span>
            </div>
            <div className="divisor2">
              <span>Dt Fim</span>
              <span className="value">----</span>
            </div>

            <div className="hidden">
              <span>Dt Fim</span>
              <span className="value">----</span>
            </div>
          </div>
        </div>

        <div className="producing-acount">
          <span className="title">Produção Acumulado</span>
          <div className="row">
            <div>
              <span>Qtd Plan</span>
              <span>112312312313</span>
            </div>

            <div>
              <span>Qtd Boa</span>
              <span>112312312313</span>
            </div>

            <div>
              <span>Qtd Ruim</span>
              <span>112312312313</span>
            </div>

            <div>
              <span>Qtd F. Rework</span>
              <span>112312312313</span>
            </div>

            <div>
              <span>Qtd Total Boa</span>
              <span>112312312313</span>
            </div>
          </div>
        </div>

        <div className="producing-hour">
          <span className="title">Produção Hora Hora</span>

          <div className="header">
            <span>Hora</span>
            <span>Qtd Plan</span>
            <span>Qtd Boa</span>
            <span>Qtd Ruim</span>
          </div>

          <div className="list">
            <div></div>
          </div>
        </div>

        <div className="menu">
          <div>Setup</div>
          <div>Ajuda</div>
          <div onClick={() => toRender("Stops", "Operation")}>
            Parada programada
          </div>
          <div>Consultar Paradas</div>
          <div>Diario de bordo</div>
        </div>
      </main>
    </Container>
  );
}
