import styled from "styled-components";

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

  ul {
    display: flex;
    margin-top: 13px;

    font-size: 14px;

    li {
      list-style: none;
      flex: 1;
      border-bottom: 1px solid ${(props) => props.theme.backgrounds.cards};
      cursor: pointer;

      &.center {
        text-align: center;
      }
      &.right {
        text-align: right;
      }

      &.active {
        border-color: ${(props) => props.theme.backgrounds.ballActive};
      }
    }
  }

  .container-orders {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    max-height: 420px;
    overflow-y: auto;

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

    div {
      width: 100%;
      background-color: ${(props) => props.theme.backgrounds.cards};
      padding: 13px 8px;
      display: flex;

      span {
        padding: 4px 20px;

        &.tag {
          background-color: ${(props) => props.theme.tags.order};
          width: 170px;
          border-radius: 4px;
          text-align: center;
          margin-left: 6px;
        }

        &.desc {
          flex: 2;
          margin-left: 50px;
        }

        &.descNumber {
          flex: 1;
        }

        &.number {
          width: 120px;
        }
      }

      & + div {
        margin-top: 5px;
      }
    }
  }
`;
