import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./Home";
import Agenda from "./pages/Agenda";
import HowToUse from "./pages/HowToUse";
import Overview from "./pages/Overview";
import TOC from "./pages/TOC";

const GlobalStyle = createGlobalStyle`
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
`;

render(
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/Agenda/:name">
          <Agenda />
        </Route>
        <Route path="/TOC">
          <TOC />
        </Route>
        <Route path="/HowToUse">
          <HowToUse />
        </Route>
        <Route path="/Overview">
          <Overview />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
