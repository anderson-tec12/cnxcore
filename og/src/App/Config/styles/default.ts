import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    outline:0;
    padding:0;
    margin:0;
    box-sizing:border-box
  }

  body{
    background-color: ${(props) => props.theme.backgrounds.app};
    color: ${(props) => props.theme.fonts.colors.default};
  }

  button{
    cursor:pointer;
  }
`;
