import { IoQrCode } from "react-icons/io5";
import Button from "../../../../Components/Button";
import { Container } from "./style";

export function TypeQR() {
  return (
    <Container>
      <div>
        <IoQrCode />
      </div>
      <button className="BTN-clean">Entrar com usuario e senha </button>
      <Button viewName="scan" className="BTN-Action" />
    </Container>
  );
}
