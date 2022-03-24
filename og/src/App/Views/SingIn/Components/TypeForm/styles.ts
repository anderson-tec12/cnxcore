import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  span {
    font-size: 15px;
    margin: 10px 0px;
  }

  input {
    background: none;
    color: ${(props) => props.theme.fonts.colors.titles};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.borders.default};
    margin: 3px 0px;
    font-size: 14px;
    width: 98%;
    margin-top: 10px;

    & + input {
      margin-top: 15px;
    }
  }

  .BTN-clean {
    background-color: transparent;
    border: none;
    color: ${(prop) => prop.theme.fonts.colors.titles};
    border-bottom: 1px solid ${(prop) => prop.theme.fonts.colors.titles};
    transition: color 0.2s;
    padding: 2px;
    margin-top: 15px;

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
