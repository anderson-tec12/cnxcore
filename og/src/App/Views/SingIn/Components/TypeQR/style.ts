import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  svg {
    width: 6vw;
    height: 6vw;
    color: ${(prop) => prop.theme.fonts.colors.titles};
    margin: 20px 0px;
  }

  .BTN-clean {
    background-color: transparent;
    border: none;
    color: ${(prop) => prop.theme.fonts.colors.titles};
    border-bottom: 1px solid ${(prop) => prop.theme.fonts.colors.titles};
    transition: color 0.2s;
    padding: 2px;

    &:hover {
      color: ${(prop) => lighten(0.4, prop.theme.fonts.colors.titles)};
    }
  }

  .BTN-Action {
    margin-top: 20px;
    width: 180px;
    padding: 7px 5px;
    border-radius: 2px;
    border: none;
    background: ${(props) => props.theme.buttons.primary.actived};
    color: ${(props) => props.theme.buttons.primary.colorText};
  }
`;
