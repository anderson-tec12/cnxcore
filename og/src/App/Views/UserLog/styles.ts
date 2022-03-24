import styled from "styled-components";
// import {} from 'polished'

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.borders.default};

  article {
    padding: 60px 100px;
    border: 1px solid ${(props) => props.theme.borders.default};
    margin-top: 100px;
  }

  .cicle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${(props) => props.theme.backgrounds.cards};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0px;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      font-size: 22px;
      & + span {
        margin-top: 2px;
        font-size: 18px;
      }
    }
  }

  button {
    margin-top: 20px;
    width: 200px;
    padding: 7px 5px;
    border-radius: 2px;
    border: none;
    background: ${(props) => props.theme.buttons.primary.actived};
    color: ${(props) => props.theme.buttons.primary.colorText};
    font-size: 18px;
  }
`;
