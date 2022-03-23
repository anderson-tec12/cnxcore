import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../Assets/Logo.png";
import { SuggestionBox } from "../../Components/SuggestionBox";
import { TypeQR } from "./Components/TypeQR";
import { STATIONS_GET } from "../../../Store/modules/Station/actions";

import { I_STAGE_GLOBAL } from "../../../Store/types";
import { I_StationsState } from "../../../Store/modules/Station/types";

import { Container, Loading, ERROR } from "./style";

export function SingIn() {
  const dispatch = useDispatch();
  const STATION = useSelector<I_STAGE_GLOBAL, I_StationsState>((stage) => {
    return stage.stations;
  });

  useEffect(() => {
    dispatch(STATIONS_GET());
  }, [dispatch]);

  if (STATION.loading) {
    return <Loading>Carregando...</Loading>;
  }

  if (STATION.error) {
    return (
      <ERROR>
        <article>
          <p>Não foi possivel carregar a listagem de recursos</p>
          <button>Tentar Novamente</button>
        </article>
      </ERROR>
    );
  }

  return (
    <Container>
      <div className="content">
        <header>
          <img src={Logo} alt="" />
          <p>
            Informe as credenciais e conecte-se no <strong>LSM MES</strong>
          </p>
        </header>
        <main>
          <article>
            <SuggestionBox />
          </article>

          <TypeQR />
        </main>
      </div>
    </Container>
  );
}
