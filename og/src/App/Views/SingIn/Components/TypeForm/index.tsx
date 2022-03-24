import { useRef } from "react";
import { I_TYPE_LOGIN } from "../../types";

import Button from "../../../../Components/Button";
import { Container } from "./styles";

interface I_PROPS {
  alterType(status: I_TYPE_LOGIN): void;
  loginFN(user: string, pass: string): void;
}

export function TypeForm({ alterType, loginFN }: I_PROPS) {
  const inputUserRef = useRef<HTMLInputElement>(null);
  const inputPassRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    const user = inputUserRef.current ? inputUserRef.current.value : "";
    const pass = inputPassRef.current ? inputPassRef.current.value : "";

    loginFN(user, pass);
  };

  const presseEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    submit();
  };

  const presseNext = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    inputPassRef.current?.focus();
  };

  return (
    <Container>
      <div>
        <input
          ref={inputUserRef}
          type="text"
          placeholder="Usuario"
          autoFocus
          onKeyPress={presseNext}
        />
        <input
          ref={inputPassRef}
          type="password"
          placeholder="Senha"
          onKeyPress={presseEnter}
        />
      </div>
      <button className="BTN-clean" onClick={() => alterType("QRCODE")}>
        Entrar com qrcode
      </button>
      <Button
        type="button"
        viewName="Login"
        className="BTN-Action"
        onClick={submit}
      />
    </Container>
  );
}
