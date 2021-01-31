import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { App } from "./app/App";

export function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
