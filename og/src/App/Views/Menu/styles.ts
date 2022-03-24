import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.section`
  padding: 10px 20px;
  user-select: none;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 10px 0px;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    li {
      list-style: none;
      width: 200px;
      height: 150px;
      background-color: ${(props) => props.theme.backgrounds.cards};
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      transition: background 0.4s;

      &:hover {
        background: ${(props) => lighten(0.3, props.theme.backgrounds.cards)};
      }

      &.disabled {
        opacity: 0.2;
        cursor: not-allowed;
        transition: cursor 0.3s;

        &:hover {
          background: ${(props) => props.theme.backgrounds.cards};
        }
      }

      span {
        font-size: 18px;
        margin-top: 10px;
      }

      svg {
        font-size: 22px;
        width: 22px;
        height: 22px;
      }
    }
  }
`;
