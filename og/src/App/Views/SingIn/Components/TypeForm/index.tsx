import { I_TYPE_LOGIN } from "../../types";

interface I_PROPS {
  alterType(status: I_TYPE_LOGIN): void;
}

export function TypeForm({ alterType }: I_PROPS) {
  return <h1 onClick={() => alterType("QRCODE")}>Formulario</h1>;
}
