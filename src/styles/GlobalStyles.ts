import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100vh;
    }

`;