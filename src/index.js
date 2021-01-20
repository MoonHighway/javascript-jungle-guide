import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { GlobalStyle } from "./theme";
import Cover from "./pages/Cover";
import Agenda from "./pages/Agenda";
import HowToUse from "./pages/HowToUse";
import Overview from "./pages/Overview";
import TOC from "./pages/TOC";
import BookComponents from "./pages/BookComponents";

render(
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/Agenda/:path">
          <Agenda />
        </Route>
        <Route path="/TOC">
          <TOC />
        </Route>
        <Route path="/HowToUse">
          <HowToUse />
        </Route>
        <Route path="/BookComponents">
          <BookComponents />
        </Route>
        <Route path="/Overview">
          <Overview />
        </Route>
        <Route path="/">
          <Cover />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
