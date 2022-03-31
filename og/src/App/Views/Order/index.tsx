import { IoMdNotifications, IoIosSearch } from "react-icons/io";
import { BiChevronLeft } from "react-icons/bi";
import { IoQrCode } from "react-icons/io5";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { GET_STATION_HOOK } from "../../Hooks/getStation";
import { GET_ROUTER_HOOK } from "../../Hooks/getView";

import { apiCore } from "../../../Services";
import { v4 } from "uuid";
import { SET_PRODUCING_HOOK } from "../../Hooks/setProducing";

interface I_ORDER {
  number: string;
  prod: string;
  gridValue: string;
  qtd: number;
  status: number;
  key: string;
  id: number;
}

export function Order() {
  const station = GET_STATION_HOOK();
  const { setPRODUCING_ORDER } = SET_PRODUCING_HOOK();
  const { toRender } = GET_ROUTER_HOOK();
  const [VT, setVT] = useState<"L" | "P" | "E">("L");

  const [listOrders_L, setListOrders_L] = useState<I_ORDER[]>([]);
  const [listOrders_P, setListOrders_P] = useState<I_ORDER[]>([]);
  const [listOrders_E, setListOrders_E] = useState<I_ORDER[]>([]);

  useEffect(() => {
    async function list() {
      const response = await apiCore.get("/api/Production/OG/Order/GetAll", {
        params: {
          length: 500,
          workstationIds: station,
        },
      });

      // model to view

      const packOrders = response.data.result
        .map((order: any) => {
          return {
            number: order.orderNumber,
            prod: order.product.code,
            gridValue: order.orderCustom?.gridValue,
            qtd: order.qtyExpected,
            status: order.status,
            id: order.id,
            key: v4(),
          };
        })
        .reduce(
          (packOrders: any, order: any) => {
            switch (order.status) {
              case 2: {
                packOrders.toExec.push(order);
                return packOrders;
              }
              case 3: {
                packOrders.progress.push(order);
                return packOrders;
              }
              case 4: {
                packOrders.closed.push(order);
                return packOrders;
              }
              default: {
                return packOrders;
              }
            }
          },
          {
            toExec: [],
            closed: [],
            progress: [],
          }
        );

      // console.log(packOrders);

      setListOrders_L(packOrders.toExec);
      setListOrders_E(packOrders.closed);
      setListOrders_P(packOrders.progress);
    }

    list();
  }, [station]);

  return (
    <Container>
      <header>
        <div
          onClick={() => {
            toRender("menu", "Order");
          }}
        >
          <BiChevronLeft />
          <span>Ordem</span>
        </div>

        <IoMdNotifications />
      </header>

      <main>
        <div className="header-main">
          <button>
            <IoQrCode />
            Scan
          </button>

          <div className="search-box">
            <input type="text" />
            <IoIosSearch />
          </div>
        </div>

        <ul>
          <li onClick={() => setVT("L")} className={VT === "L" ? "active" : ""}>
            Liberado ({listOrders_L.length})
          </li>
          <li
            onClick={() => setVT("P")}
            className={VT === "P" ? "center active" : "center"}
          >
            Em progresso ({listOrders_P.length})
          </li>
          <li
            onClick={() => setVT("E")}
            className={VT === "E" ? "right active" : "right"}
          >
            Encerrado ({listOrders_E.length})
          </li>
        </ul>

        <div className="container-orders">
          {VT === "L" &&
            listOrders_L.map((order) => (
              <div
                key={order.key}
                onClick={() => {
                  setPRODUCING_ORDER({ id: order.id, number: order.number });
                  toRender("Order/OperationList", "Order");
                }}
              >
                <span className="tag">#{order.number}</span>
                <span className="desc">{order.prod}</span>
                <span className="descNumber">{order.gridValue}</span>
                <span className="number">{order.qtd} PC(s)</span>
              </div>
            ))}

          {VT === "E" &&
            listOrders_E.map((order) => (
              <div
                key={order.key}
                onClick={() => {
                  setPRODUCING_ORDER({ id: order.id, number: order.number });
                  toRender("Order/OperationList", "Order");
                }}
              >
                <span className="tag">#{order.number}</span>
                <span className="desc">{order.prod}</span>
                <span className="descNumber">{order.gridValue}</span>
                <span className="number">{order.qtd} PC(s)</span>
              </div>
            ))}

          {VT === "P" &&
            listOrders_P.map((order) => (
              <div
                key={order.key}
                onClick={() => {
                  setPRODUCING_ORDER({ id: order.id, number: order.number });
                  toRender("Order/OperationList", "Order");
                }}
              >
                <span className="tag">#{order.number}</span>
                <span className="desc">{order.prod}</span>
                <span className="descNumber">{order.gridValue}</span>
                <span className="number">{order.qtd} PC(s)</span>
              </div>
            ))}
        </div>
      </main>
    </Container>
  );
}
