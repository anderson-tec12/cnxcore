import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "./style";
import { v4 } from "uuid";

interface I_DATA_VALUES {
  name: string;
  id: number;
}
interface I_PROPS {
  dataValues: I_DATA_VALUES[];
  itemActived: number;
  alterItemActived(value: number): void;
}

let timeExec: NodeJS.Timeout;

export function SuggestionBox({
  dataValues,
  itemActived,
  alterItemActived,
}: I_PROPS) {
  const [isOpen, setOpen] = useState(false);
  const [baseLocal, setBaseLocal] = useState(dataValues);

  const inputRef = useRef<HTMLInputElement>(null);

  const valueActive = dataValues.find((item) => item.id === itemActived);
  const alterValue = (id: number) => {
    alterItemActived(id);
    setOpen(!isOpen);
    setBaseLocal(dataValues);
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    clearTimeout(timeExec);

    timeExec = setTimeout(() => {
      if (value === "") {
        setBaseLocal(dataValues);
        return;
      }

      const valueSearch = value.toLocaleLowerCase();
      const baseLocalFiltred = dataValues.filter((item) =>
        item.name.toLocaleLowerCase().includes(valueSearch)
      );

      setBaseLocal(baseLocalFiltred);
    }, 400);
  };

  return (
    <Container>
      <div className="input-fake" onClick={() => setOpen(!isOpen)}>
        <span>{valueActive ? valueActive.name : "Estação"}</span>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <article className="suggestion">
          <input type="text" autoFocus ref={inputRef} onChange={search} />
          <ul>
            {baseLocal.map((item) => (
              <li key={v4()} onClick={() => alterValue(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </article>
      )}
    </Container>
  );
}
