import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { App } from "./app/App";

export function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
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
