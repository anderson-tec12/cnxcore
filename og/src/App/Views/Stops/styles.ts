import styled, { css } from "styled-components";

interface I_Container {
  modalOpen: boolean;
}

export const Container = styled.div<I_Container>`
  padding: 10px 20px;
  user-select: none;
  overflow: hidden;

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
    ${(props) =>
      props.modalOpen &&
      css`
        filter: blur(4px);
      `}
  }

  .header-main {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .search-box {
      display: flex;
      align-items: flex-start;
      margin-top: 8px;

      input {
        width: 400px;
        padding: 12px 2px;
        background: ${(props) => props.theme.backgrounds.cards};
        border: 0px;
        color: ${(props) => props.theme.fonts.colors.titles};
        border-radius: 4px 0px 0px 4px;
      }

      svg {
        background: ${(props) => props.theme.backgrounds.cards};
        color: ${(props) => props.theme.fonts.colors.titles};
        padding: 10px 2px;
        display: block;
        font-size: 39px;
        border-radius: 0px 4px 4px 0px;
      }
    }
  }

  ul {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
      width: 145px;
      height: 145px;
      list-style: none;
      padding: 10px;
      background: ${(props) => props.theme.backgrounds.cards};
      background: red;
      border-radius: 4px;
      span {
        display: block;
      }
    }
  }
`;

export const Modal = styled.div`
  background: ${(props) => props.theme.backgrounds.cards};
  width: 50%;
  padding: 10px;
  position: absolute;
  top: calc(30vh - 30px);
  display: block;
  left: calc(50vw - 25%);
  padding: 40px 1%;

  .desc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      display: block;
      font-size: 18px;
    }
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    gap: 20px;

    button {
      background: none;
      border: 1px solid ${(props) => props.theme.borders.default};
      color: ${(props) => props.theme.fonts.colors.default};
      padding: 9px 10px;
      width: 120px;
    }
  }
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 98%;
  height: 90vh;
  top: 60px;
  position: absolute;
`;
