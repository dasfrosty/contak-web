import * as React from "react";
import { Container } from "reactstrap";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { Contacts } from "./Contacts";
import { ContactDetails } from "./ContactDetails";

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
            <ContactDetails />
          </Route>
          <Route path={match.path}>
            <Redirect to={match.path} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
