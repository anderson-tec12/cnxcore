import { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { STATIONS_GET } from "../../../Store/modules/Station/actions";
import { I_STAGE_GLOBAL } from "../../../Store/types";
import { I_StationsState } from "../../../Store/modules/Station/types";
import { I_LOGIN_STAGE } from "../../../Store/modules/Login/types";

import { SuggestionBox } from "../../Components/SuggestionBox";

import { Container, Loading, ERROR } from "./style";
import Logo from "../../Assets/Logo.png";

import { I_TYPE_LOGIN } from "./types";
import { TypeSignIn } from "./Components/TypeSignIn";
import {
  LOGIN_ERROR_SET,
  LOGIN_GET,
} from "../../../Store/modules/Login/actions";
import { ROUTER_SET } from "../../../Store/modules/Router/actions";

export function SingIn() {
  const dispatch = useDispatch();
  const STATION = useSelector<I_STAGE_GLOBAL, I_StationsState>((stage) => {
    return stage.stations;
  });

  const Login = useSelector<I_STAGE_GLOBAL, I_LOGIN_STAGE>((stage) => {
    return stage.Login;
  });

  const [station_selected, setStation_selected] = useState(0);

  const [typeLoginSelected, setTypeLoginSelected] =
    useState<I_TYPE_LOGIN>("QRCODE");

  const handleAlterTypeSignIn = useCallback((value: I_TYPE_LOGIN) => {
    setTypeLoginSelected(value);
  }, []);

  const handleSetStationSelected = (value: number) => {
    setStation_selected(value);
  };

  const handleLoginUserAndPass = (user: string, password: string) => {
    dispatch(
      LOGIN_GET({
        pass: password,
        user,
        station: station_selected,
      })
    );
  };

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
          <button
            onClick={() => {
              dispatch(
                ROUTER_SET({
                  old: "login",
                  to: "menu",
                })
              );
            }}
          >
            Tentar Novamente
          </button>
        </article>
      </ERROR>
    );
  }

  if (Login.isRequestLogin) {
    return <Loading>Processando</Loading>;
  }

  if (Login.error) {
    return (
      <ERROR>
        <article>
          <p>Credenciais invalidas</p>
          <button onClick={() => dispatch(LOGIN_ERROR_SET(false))}>
            Tentar Novamente
          </button>
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
            <SuggestionBox
              nameIsEmpty="Estação"
              itemActived={station_selected}
              dataValues={STATION.stations}
              alterItemActived={handleSetStationSelected}
            />
          </article>

          <TypeSignIn
            type={typeLoginSelected}
            alterTypeFN={handleAlterTypeSignIn}
            loginForm={handleLoginUserAndPass}
          />
        </main>
      </div>
    </Container>
  );
}
