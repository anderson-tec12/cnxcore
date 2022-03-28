import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
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
    padding: 0px 100px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
      width: 60%;
      border: 1px solid ${(props) => darken(0.3, props.theme.borders.default)};
      border-radius: 4px;
      background: ${(props) => props.theme.backgrounds.cards};
      padding: 10px 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      transition: border 0.2s;

      &:hover {
        border-bottom-color: ${(props) => props.theme.buttons.primary.actived};
      }

      & + div {
        margin-top: 14px;
      }

      .ball {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: ${(props) => lighten(0.2, props.theme.backgrounds.cards)};

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;

        &.active {
          background: ${(props) => props.theme.buttons.primary.actived};
        }
      }

      .name {
        flex: 1;
        cursor: pointer;
      }

      .type {
        width: 140px;
      }

      .exit {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
