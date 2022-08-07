import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const devices = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  desktop: `(min-width: 2560px)`,
};

export const colors = {
  pageBackground: "linear-gradient(to bottom, #232526, #3a3d40)",
  primary: "#01411C",
  secondary: "#6B8E23",
  tertiary: "#2d2626",
  textColor: "#fff",
  borderColor: "#fff",
  mobileNavbarBackground:"#fff",
  gray: "#303841",
  darkGray: "#2e2727",
  cardTitle: "rgb(45, 38, 38)",
  cardDetail: "#131215",
  openedCardBackground: "rgba(0, 0, 0, 0.8)",
}

const GlobalStyle = createGlobalStyle`
body {
  margin: 0px;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: ${colors.pageBackground};
}

html {
scroll-behavior: smooth;
}

.container {
flex: 1 1 100%;
}

@media print{
  body {
    background-color: white;
    color: black;
  }
}

`;

export default GlobalStyle;