import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const pathBackground = '../assets/images/bg-intro-mobile.png';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: ${theme.colors.text};
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  min-width: 320px;
  min-height: 100vh;
  font-size:16px;
  background: url(${pathBackground}), hsl(0,100%,74%);
}


`

export default GlobalStyle;