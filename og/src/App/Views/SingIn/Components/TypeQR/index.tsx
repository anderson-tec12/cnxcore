import { IoQrCode } from "react-icons/io5";
import Button from "../../../../Components/Button";

import { I_TYPE_LOGIN } from "../../types";

import { Container } from "./style";

interface I_PROPS {
  alterType(status: I_TYPE_LOGIN): void;
}

export function TypeQR({ alterType }: I_PROPS) {
  return (
    <Container>
      <div>
        <IoQrCode />
      </div>
      <button className="BTN-clean" onClick={() => alterType("FORM")}>
        Entrar com usuario e senha{" "}
      </button>
      <Button viewName="scan" className="BTN-Action" />
    </Container>
  );
}
