import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 20px;
  user-select: none;

  & > header {
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

  .infos {
    display: flex;
    gap: 10;
    margin: 20px 10px;

    div {
      flex: 1;
      width: 100%;

      &.center {
        text-align: center;
      }

      &.right {
        text-align: right;
      }

      span {
        display: block;
      }
    }
  }

  .values {
    display: flex;
    gap: 10;
    margin: 30px 10px;
    justify-content: space-between;

    div {
      span {
        display: block;
      }

      input {
        background: none;
        border: 1px solid ${(props) => props.theme.borders.default};
        width: 150px;
        height: 40px;
        color: ${(props) => props.theme.fonts.colors.default};
        padding: 10px;
      }
    }
  }

  .Defects-container {
    header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme.borders.default};
      padding: 2px;

      span {
        font-size: 15px;
        width: 80px;
        padding: 0px;
      }

      button {
        background: none;
        border: 1px solid ${(props) => props.theme.borders.default};
        color: ${(props) => props.theme.fonts.colors.default};
        padding: 7px 10px;
        margin-left: 22px;
      }
    }

    .main {
      min-height: 170px;
    }
  }

  .Losses-container {
    header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme.borders.default};
      padding: 2px;

      span {
        font-size: 15px;
        width: 80px;
        padding: 0px;
      }

      button {
        background: none;
        border: 1px solid ${(props) => props.theme.borders.default};
        color: ${(props) => props.theme.fonts.colors.default};
        padding: 7px 10px;
        margin-left: 22px;
      }
    }

    .main {
      min-height: 170px;
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button {
      background: none;
      border: 1px solid ${(props) => props.theme.borders.default};
      color: ${(props) => props.theme.fonts.colors.default};
      width: 220px;
      padding: 15px 10px;
    }
  }
`;
