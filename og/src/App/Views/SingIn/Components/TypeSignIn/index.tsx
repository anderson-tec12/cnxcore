import { TypeForm } from "../TypeForm";
import { TypeQR } from "../TypeQR";
import { I_TYPE_LOGIN } from "../../types";

interface I_PROPS {
  type: I_TYPE_LOGIN;
  alterTypeFN(value: I_TYPE_LOGIN): void;
  loginForm(user: string, pass: string): void;
}

export function TypeSignIn({ type, alterTypeFN, loginForm }: I_PROPS) {
  if (type === "FORM") {
    return <TypeForm alterType={alterTypeFN} loginFN={loginForm} />;
  }
  return <TypeQR alterType={alterTypeFN} />;
}
