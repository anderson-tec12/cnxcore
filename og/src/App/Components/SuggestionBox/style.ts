import styled from "styled-components";
import { lighten } from "polished";
export const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borders.default};
  color: ${(props) => props.theme.fonts.colors.titles};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => lighten(0.2, props.theme.fonts.colors.default)};
  }

  .input-fake {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
