import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "./style";
import { v4 } from "uuid";

interface I_DATA_VALUES {
  name: string;
  id: number;
}
interface I_PROPS {
  dataValues: I_DATA_VALUES[];
}

export function SuggestionBox({ dataValues }: I_PROPS) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <div className="input-fake" onClick={() => setOpen(!isOpen)}>
        <span>Estação</span>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <article className="suggestion">
          <input type="text" autoFocus />
          <ul>
            {dataValues.map((item) => (
              <li key={v4()}>{item.name}</li>
            ))}
          </ul>
        </article>
      )}
    </Container>
  );
}
