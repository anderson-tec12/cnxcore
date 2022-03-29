import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { I_STATION } from "../../../Store/modules/Station/types";
import { SuggestionBox } from "../../Components/SuggestionBox";
import { GET_STATION_ALL_HOOK } from "../../Hooks/getStationAll";
import { Container, Message } from "./styles";
import { GET_ROUTER_HOOK } from "../../Hooks/getView";
import { User } from "../../Hooks/getUser";
import { v4 } from "uuid";

export function Config() {
  const { user } = User();
  const { toRender } = GET_ROUTER_HOOK();
  const stations = GET_STATION_ALL_HOOK();

  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "Portugues",
    },
    {
      id: 2,
      name: "Ingles",
    },
  ]);

  const [languageSelected, setLanguagesSelected] = useState(1);

  const [station_preset, SetStation_preset] = useState<I_STATION[]>([]);
  const [station_preSelect, SetStation_preSelect] = useState(0);

  const handdle_setStationInDevice = () => {
    const stationSearch = stations.find(
      (item) => item.id === station_preSelect
    );

    if (!stationSearch) return;

    // verificando se ja existe
    const isExists = station_preset.find(
      (item) => item.id === stationSearch.id
    );

    if (isExists) return;
    SetStation_preset([...station_preset, stationSearch]);
    SetStation_preSelect(0);
  };

  const handle_removeItem = (id: number) => {
    SetStation_preset((state) => state.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setLanguages([
      {
        id: 1,
        name: "Portugues",
      },
      {
        id: 2,
        name: "Ingles",
      },
    ]);
  }, []);

  return (
    <Container blur={user.level < 2 ? true : false}>
      <header>
        <div onClick={() => toRender("menu", "Config")}>
          <BiChevronLeft />
          <span>Configuração</span>
        </div>
      </header>

      <main>
        <div className="language">
          <SuggestionBox
            nameIsEmpty="Idioma"
            itemActived={languageSelected}
            dataValues={languages}
            alterItemActived={(id: number) => {
              setLanguagesSelected(id);
            }}
          />
        </div>

        <div className="stations_row">
          <div className="selector-station">
            <SuggestionBox
              nameIsEmpty="Estação"
              itemActived={station_preSelect}
              dataValues={stations}
              alterItemActived={(id: number) => {
                SetStation_preSelect(id);
              }}
            />
          </div>

          <button type="button" onClick={handdle_setStationInDevice}>
            Add
          </button>
        </div>

        <div className="station_configurate_list">
          {station_preset.map((item) => (
            <div className="item" key={v4()}>
              <span>{item.name}</span>
              <IoMdClose onClick={() => handle_removeItem(item.id)} />
            </div>
          ))}
        </div>
      </main>

      {user.level < 2 && (
        <Message>
          <span>Permissão somente para usuário administrador</span>
        </Message>
      )}
    </Container>
  );
}
