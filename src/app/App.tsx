import * as React from "react";
import { Container } from "reactstrap";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { NavBar, NavPanel } from "./components";
import { ContactsRoutes } from "./contacts/ContactsRoutes";

export function App() {
  let match = useRouteMatch();

  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route path={`${match.path}/contacts`}>
            <NavPanel name="Contacts">
              <ContactsRoutes />
            </NavPanel>
          </Route>
          <Route path={match.path}>
            <Redirect to={`${match.path}/contacts`} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
