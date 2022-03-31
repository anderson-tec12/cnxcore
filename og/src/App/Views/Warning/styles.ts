import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 30px;

  background: ${(props) => props.theme.backgrounds.warning};

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  header {
    font-size: 24px;
    margin-top: 20px;
  }

  main {
    margin-top: 60px;

    div {
      font-size: 28px;

      & + div {
        margin-top: 10px;
        font-size: 26px;
        text-align: center;
      }
    }
  }

  article {
    font-size: 100px;
    padding: 80px 20px;
  }

  footer {
    display: flex;
    gap: 30px;
    margin-top: 40px;
    button {
      background: none;
      border: 1px solid #ffffff;
      color: #fff;
      width: 120px;
      padding: 13px 16px;
    }
  }
`;
