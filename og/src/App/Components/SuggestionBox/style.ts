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
    span {
      font-size: 14px;
    }
  }

  > article.suggestion {
    position: absolute;
    background: ${(props) => props.theme.backgrounds.app};
    margin-top: 21px;
    flex-direction: column;
    z-index: 2;
    height: 150px;
    border: 1px solid #ccc;
    border-top: 0px;
    padding: 2px 4px;
    align-items: start;

    input {
      background: none;
      color: ${(props) => props.theme.fonts.colors.titles};
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.borders.default};
      margin: 3px 0px;
      font-size: 12px;
      width: 98%;
    }

    ul {
      max-height: 150px;
      overflow: auto;
      width: 100%;
      font-size: 14px;
      &::-webkit-scrollbar-track  {
        background-color: ${(props) => props.theme.backgrounds.app};
      }

      &::-webkit-scrollbar  {
        width: 1px;
        background: ${(props) => props.theme.backgrounds.app};
      }

      &::-webkit-scrollbar-thumb  {
        background: #dad7d7;
      }
    }

    li {
      list-style: none;
      color: ${(props) => props.theme.fonts.colors.titles};

      & + li {
        margin-top: 2px;
      }

      &:hover {
        color: ${(props) => lighten(0.6, props.theme.fonts.colors.titles)};
      }
    }
  }
`;
