import { TypeForm } from "../TypeForm";
import { TypeQR } from "../TypeQR";
import { I_TYPE_LOGIN } from "../../types";

interface I_PROPS {
  type: I_TYPE_LOGIN;
  alterTypeFN(value: I_TYPE_LOGIN): void;
}

export function TypeSignIn({ type, alterTypeFN }: I_PROPS) {
  if (type === "FORM") {
    return <TypeForm alterType={alterTypeFN} />;
  }
  return <TypeQR alterType={alterTypeFN} />;
}
