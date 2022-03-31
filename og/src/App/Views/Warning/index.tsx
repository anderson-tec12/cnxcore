import { GET_ROUTER_HOOK } from "../../Hooks/getView";

import { Container } from "./styles";

export function Warning() {
  const { toRender } = GET_ROUTER_HOOK();

  const handleCloseStop = () => {
    toRender("Operation", "Stops");
  };

  return (
    <Container>
      <header>Recurso Parada</header>

      <main>
        <div>Nome Recurso - PRO G02 - TIPO DE PARADA PROGRAMADA</div>

        <div>Iniciando em 31/03/20222 12:29:10</div>
      </main>

      <article>00:16:15</article>

      <footer>
        <button
          onClick={() => {
            toRender("Stops", "Warning");
          }}
        >
          Alterar
        </button>
        <button
          onClick={() => {
            handleCloseStop();
          }}
        >
          Encerrar
        </button>
      </footer>
    </Container>
  );
}
