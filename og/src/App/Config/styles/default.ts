import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    outline:0;
    padding:0;
    margin:0;
    box-sizing:border-box;

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
  }

  body{
    background-color: ${(props) => props.theme.backgrounds.app};
    color: ${(props) => props.theme.fonts.colors.default};
    overflow: hidden;
  }

  button{
    cursor:pointer;
  }
`;
