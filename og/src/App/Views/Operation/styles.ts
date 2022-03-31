import styled from "styled-components";

export const Container = styled.div`
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
    .controllers {
      display: flex;
      justify-content: space-around;

      button {
        background: ${(props) => props.theme.backgrounds.cards};
        border: 0px;
        padding: 15px 20px;
        color: ${(props) => props.theme.fonts.colors.titles};
        width: 20%;
        border-radius: 20px;
        font-size: 16px;
      }
    }

    .info {
      .row {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &.workstation {
          margin-top: 10px;
          font-size: 18px;
        }

        & + .row {
          margin-top: 20px;
        }

        .station {
          flex: 1;
          color: ${(props) => props.theme.fonts.colors.default};
        }

        .statusWorkstation {
          width: 200px;
          background-color: ${(props) => props.theme.backgrounds.cards};
          color: ${(props) => props.theme.fonts.colors.default};
          text-align: center;
          padding: 7px 2px;
        }

        .turn {
          flex: 1;
          color: ${(props) => props.theme.fonts.colors.default};
          text-align: right;
        }

        .divisor {
          display: flex;
          flex-direction: column;
          flex: 1;

          span {
            color: ${(props) => props.theme.fonts.colors.titles};
          }

          span.value {
            color: ${(props) => props.theme.fonts.colors.default};
          }
        }

        .status-operator {
          width: 200px;
          border: 1px solid ${(props) => props.theme.backgrounds.cards};
          padding: 7px 2px;
          text-align: center;
        }
      }
    }

    .info-plus {
      .row {
        display: flex;
        justify-content: flex-start;
        margin-top: 25px;

        .divisor1 {
          width: 40.5vw;
        }

        .divisor2 {
          width: 40.5vw;
        }

        .hidden {
          display: none;
        }

        span {
          display: block;
          color: ${(props) => props.theme.fonts.colors.titles};
        }

        span.value {
          color: ${(props) => props.theme.fonts.colors.default};
        }
      }
    }

    .producing-acount {
      width: 100%;
      margin-top: 13px;

      .title {
        border-bottom: 1px solid ${(props) => props.theme.borders.default};
        width: 100%;
        display: block;
        color: ${(props) => props.theme.fonts.colors.titles};
      }

      .row {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        justify-content: space-around;

        div {
          width: 350px;
          /* background: red; */
          span {
            display: block;
            color: ${(props) => props.theme.fonts.colors.titles};
            & + span {
              color: ${(props) => props.theme.fonts.colors.default};
              font-size: 17px;
              margin-top: 2px;
            }
          }
        }
      }
    }

    .producing-hour {
      margin-top: 18px;
      .title {
        border-bottom: 1px solid ${(props) => props.theme.borders.default};
        width: 100%;
        display: block;
        color: ${(props) => props.theme.fonts.colors.titles};
        font-size: 16px;
      }

      .header {
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-around;
        color: ${(props) => props.theme.fonts.colors.titles};
        font-size: 16px;

        span {
          display: block;
          flex: 1;

          & + span {
            margin-top: 2px;
          }
        }
      }

      .list {
        min-height: 159px;
        max-height: 159px;
      }
    }

    .menu {
      display: flex;
      gap: 20px;
      font-size: 18px;
      div {
        border: 1px solid ${(props) => props.theme.backgrounds.cards};
        flex: 1;
        text-align: center;
        padding: 28px;
      }
    }
  }
`;
