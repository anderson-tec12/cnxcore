import { IoIosArrowDown } from "react-icons/io";
import { Container } from "./style";

export function SuggestionBox() {
  return (
    <Container>
      <div className="input-fake">
        <span>Estação</span>
        <IoIosArrowDown />
      </div>
    </Container>
  );
}
