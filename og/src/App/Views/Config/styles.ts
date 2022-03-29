import styled, { css } from "styled-components";
import { lighten } from "polished";

type I_Container = {
  blur: boolean;
};
export const Container = styled.div<I_Container>`
  padding: 10px 20px;
  user-select: none;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 10px 0px;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        width: 28px;
        height: 28px;
      }
    }

    svg {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }
  }

  main {
    padding: 5px 10px;

    ${(props) =>
      props.blur &&
      css`
        filter: blur(3px);
      `}

    .language {
      width: 256px;
      margin-top: 20px;

      .suggestion {
        height: 70px;
        ul {
          max-height: 70px;
        }
      }
    }

    .stations_row {
      display: flex;
      align-items: center;
      margin-top: 70px;

      .selector-station {
        width: 370px;
        margin-right: 20px;
        padding: 3px 0px;
        width: ;

        .suggestion {
          width: 370px;
          height: 180px;
        }
      }

      button {
        background: none;
        border: 1px solid ${(props) => props.theme.borders.default};
        color: ${(props) => props.theme.fonts.colors.titles};
        padding: 3px 8px;
      }
    }

    .station_configurate_list {
      margin-top: 5px;
      width: 370px;
      color: ${(props) => props.theme.fonts.colors.titles};
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

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        transition: color 0.2s;
        cursor: pointer;

        & + .item {
          margin-top: 5px;
        }

        &:hover {
          color: ${(props) => lighten(0.6, props.theme.fonts.colors.titles)};
        }
      }
    }
  }
`;

export const NoPermission = styled.div`
  position: absolute;
  top: 0px;

  width: 98vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  filter: blur(4px);
`;

export const Message = styled.div`
  position: absolute;
  top: 60px;
  width: 98vw;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
