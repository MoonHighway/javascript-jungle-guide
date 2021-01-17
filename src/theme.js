import { createGlobalStyle } from "styled-components";
import openSans from "./fonts/OpenSans-Regular.ttf";
import spartan from "./fonts/Spartan-Regular.ttf";
import spartanBlack from "./fonts/Spartan-Black.ttf";
import grace from "./fonts/CoveredByYourGrace-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, p, td, th {
    margin: 0;
    padding: 0;
  }
  #root {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'), url(${openSans}) format('truetype');
  }
  
  @font-face {
      font-family: 'Spartan';
      font-weight: 900;
      src: local('Spartan'), url(${spartan}) format('truetype');
  }
  
  @font-face {
      font-family: 'SpartanBlack';
      font-weight: 900;
      src: local('SpartanBlack'), url(${spartanBlack}) format('truetype');
  }
  @font-face {
    font-family: 'CoveredByYourGrace';
    font-weight: 900;
    src: local('CoveredByYourGrace'), url(${grace}) format('truetype');
}
`;

export const fonts = {
  title: "SpartanBlack",
  subtitle: "Spartan",
  text: "OpenSans",
  handwriting: "CoveredByYourGrace",
};

export const colors = {
  primary: "#10418A",
  secondary: "#007ABC",
};
