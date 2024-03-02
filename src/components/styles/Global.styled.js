import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: Arial, sans-serif;
        background-color: #eff2f6;
    }

    h1 {
        font-size: 2rem;
        color: #454545;
    }
`;

export default GlobalStyle;
