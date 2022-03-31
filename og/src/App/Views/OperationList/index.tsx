import { IoMdNotifications, IoIosSearch } from "react-icons/io";
import { BiChevronLeft } from "react-icons/bi";

import { GET_ROUTER_HOOK } from "../../Hooks/getView";
import { SET_PRODUCING_HOOK } from "../../Hooks/setProducing";
import { GET_STATION_HOOK } from "../../Hooks/getStation";
import { apiCore } from "../../../Services";

import { Container } from "./styles";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function STATUS_DESCRIBE(value: number) {
  switch (value) {
    case 1: {
      return {
        color: "CREATED",
        text: "Criado",
      };
    }
    case 2: {
      return {
        color: "RELEASED",
        text: "Liberado",
      };
    }
    case 4: {
      return {
        color: "DONE",
        text: "Encerrado",
      };
    }
    case 5: {
      return {
        color: "CANCELED",
        text: "Cancelado",
      };
    }
    case 6: {
      return {
        color: "BLOCKED",
        text: "Bloqueado",
      };
    }
    case 7: {
      return {
        color: "RE_WORK",
        text: "Retrabalho",
      };
    }
    case 8: {
      return {
        color: "pending",
        text: "Parado",
      };
    }
    case 3: {
      return {
        color: "IN_PROGRESS",
        text: "Em progresso",
      };
    }
    default: {
      return {
        color: "",
        text: "",
      };
    }
  }
}

export function OperationList() {
  const { toRender } = GET_ROUTER_HOOK();
  const { order } = SET_PRODUCING_HOOK();
  const stationSelected = GET_STATION_HOOK();

  const [operationsOrder, setOperationsOrder] = useState<any[]>([]);
  const [operationsStation, SetOperationsStation] = useState<any[]>([]);

  useEffect(() => {
    async function getListOperations() {
      const response = await apiCore.get(
        "/api/production/OG/GetAvaliableOperations",
        {
          params: {
            orderId: order.id,
            workstationIds: stationSelected,
          },
        }
      );

      console.log(response.data);
      const binded = response.data.bindedOperation.map((item: any) => {
        const operation = item.operations[0].operation;
        return {
          code: operation.code,
          desc: operation.description,
          status: item.status,
        };
      });

      const avaliableOperation = response.data.avaliableOperation.map(
        (item: any) => {
          return {
            code: item.code,
            desc: item.description,
            status: 0,
          };
        }
      );

      setOperationsOrder(binded);
      SetOperationsStation(avaliableOperation);
    }

    getListOperations();
  }, [stationSelected, order]);

  return (
    <Container>
      <header>
        <div
          onClick={() => {
            toRender("Order", "menu");
          }}
        >
          <BiChevronLeft />
          <span>Operações / </span>
          <span>{order.number}</span>
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

        <div className="container_list">
          <ul>
            {operationsOrder.map((item) => (
              <li
                key={v4()}
                onClick={() => toRender("Operation", "Order/OperationList")}
              >
                <div>
                  <span className="tag">{item.code}</span>
                </div>
                <div>
                  <span className="desc">{item.desc}</span>
                </div>
                <div>
                  <span
                    className={`status ${STATUS_DESCRIBE(item.status).color}`}
                  >
                    {STATUS_DESCRIBE(item.status).text}
                  </span>
                </div>
              </li>
            ))}

            {operationsStation.map((item) => (
              <li className="not-link" key={v4()}>
                <div>
                  <span className="tag">{item.code}</span>
                </div>
                <div>
                  <span className="desc">{item.desc}</span>
                </div>
                <div>
                  <span
                    className={`status ${STATUS_DESCRIBE(item.status).color}`}
                  >
                    {STATUS_DESCRIBE(item.status).text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Container>
  );
}
