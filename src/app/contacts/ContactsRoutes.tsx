import * as React from "react";
import { Container } from "reactstrap";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { Contacts } from "./Contacts";
import { RoutedContactDetails } from "./RoutedContactDetails";

export function ContactsRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Container>
        <Switch>
          <Route path={match.path} exact>
            <Contacts />
          </Route>
          <Route path={`${match.path}/:contactId`}>
            <RoutedContactDetails />
          </Route>
          <Route path={match.path}>
            <Redirect to={match.path} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
