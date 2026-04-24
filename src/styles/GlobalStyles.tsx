import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *:after{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
   body{
    margin: 0;
    background-color: white;
    font-family: ${theme.fonts.primery};
   }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button{
        cursor: pointer;
        background-color: unset;
    }
    h1,h2,h3,h4,h5,h6{
        line-height: 1;
        font-size: 1rem;
    }
`