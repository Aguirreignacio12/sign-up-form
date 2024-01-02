import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import backgroundMobile from "../assets/images/bg-intro-mobile.png";
import backgroundDesktop from "../assets/images/bg-intro-desktop.png";

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
  font-size:${theme.fontSize.default};
  background: url(${backgroundMobile}), hsl(0,100%,74%);
  color:${theme.colors.text};
}

@media ${theme.mediaQueries.desktop}{
  background: url(${backgroundDesktop}), hsl(0,100%,74%);
}
`

export default GlobalStyle;