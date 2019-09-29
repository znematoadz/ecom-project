import { createGlobalStyle } from "styled-components";

export const GlobalStlye = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Josefin Sans", sans-serif;
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`;
