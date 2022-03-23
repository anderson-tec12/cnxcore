import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;

  .content {
    width: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${(props) => darken(0.2, props.theme.borders.default)};
    margin: 0 auto;
    margin-top: 80px;
    padding: 20px 0;
    transition: all 0.2s;

    &:hover {
      border-color: ${(props) => darken(0.0, props.theme.borders.default)};
      border-radius: 5px;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 180px;
      margin: 15px 30px;
    }

    p {
      color: ${(props) => props.theme.fonts.colors.titles};
    }

    strong {
      display: block;
      text-align: center;
      margin-top: 5px;
      font-weight: 500;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;

    article {
      width: 180px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const ERROR = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

  article {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      margin-top: 10px;
      padding: 7px;
    }
  }
`;
