import { GET_ROUTER_HOOK } from "../../Hooks/getView";
import { Container } from "./styles";
export function Appointments() {
  const { toRender } = GET_ROUTER_HOOK();
  return (
    <Container>
      <header>Apontar Produção</header>

      <main>
        <article className="infos">
          <div>
            <span>Ordem</span>
            <span>0018176305</span>
          </div>

          <div className="center">
            <span>Operação</span>
            <span>0018176305</span>
          </div>

          <div className="right">
            <span>Hora</span>
            <span>0018176305</span>
          </div>
        </article>

        <article className="values">
          <div>
            <span>Qtd Plan</span>
            <input type="number" />
          </div>

          <div>
            <span>Qtd Boa</span>
            <input type="number" />
          </div>

          <div>
            <span>Qtd Ruim</span>
            <input type="number" />
          </div>

          <div>
            <span>Qtd F.Rework</span>
            <input type="number" />
          </div>
        </article>

        <article className="Defects-container">
          <header>
            <span>Defeitos</span>
            <button>Adicionar</button>
          </header>

          <div className="main"></div>
        </article>

        <article className="Losses-container">
          <header>
            <span>Perdas</span>
            <button>Adicionar</button>
          </header>
          <div className="main"></div>
        </article>

        <footer>
          <button onClick={() => toRender("Operation", "Order/OperationList")}>
            Cancelar
          </button>
          <button onClick={() => toRender("Operation", "Order/OperationList")}>
            Salvar
          </button>
        </footer>
      </main>
    </Container>
  );
}
