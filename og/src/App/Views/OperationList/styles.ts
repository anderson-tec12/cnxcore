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

  .header-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      width: 170px;
      padding: 10px 5px;
      border-radius: 2px;
      border: none;
      background: ${(props) => props.theme.buttons.primary.actived};
      color: ${(props) => props.theme.buttons.primary.colorText};
      font-size: 14px;

      svg {
        margin-right: 4px;
      }
    }

    .search-box {
      display: flex;
      align-items: center;
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

  .container_list {
    width: 84%;
    display: block;
    margin: 0 auto;
    margin-top: 20px;

    ul {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      /* height:400px; */
      max-height: 580px;
      overflow: auto;
      padding: 2px;

      li {
        list-style: none;
        width: 200px;
        height: 160px;
        background: ${(props) => props.theme.backgrounds.cards};
        border-radius: 4px;
        padding: 4px 8px;

        div {
          width: 100%;
          margin-top: 5px;
        }

        .tag {
          background-color: ${(props) => props.theme.tags.order};
          width: auto;
          border-radius: 4px;
          padding: 4px 6px;
          font-size: 14px;
        }

        .desc {
          margin-top: 5px;
          margin-bottom: 5px;
          display: block;
          max-height: 100px;
          min-height: 100px;
          overflow: auto;
          font-size: 14px;
        }

        .status {
          padding: 4px 0px;
          font-size: 14px;
        }

        .done {
          color: #15e106;
        }

        .progress {
          color: #e1d206;
        }

        .pending {
          color: #e1ae06;
        }

        .CREATED {
          color: rgba(255, 255, 255, 0.08);
        }
        .RELEASED {
          color: #e5d353;
        }
        .IN_PROGRESS {
          color: #1a9ce8;
        }
        .DONE {
          color: #5ab679;
        }
        .CANCELED {
          color: #f04747;
        }
        .BLOCKED {
          color: #222222;
        }
        .RE_WORK {
          color: #8337a6;
        }
        .STOPED {
          color: #f0831b;
        }
        .DELAYED {
          color: #d64040;
        }
        .NO_SCHEDULE {
          color: #d1d7dd;
        }
      }
    }
  }
`;
