import * as React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link, useRouteMatch } from "react-router-dom";

import { useMyContactsQuery } from "../../graphql";
import { Loading } from "../components";

export function Contacts() {
  const { loading, error, data } = useMyContactsQuery();

  let match = useRouteMatch();

  return (
    <Loading loading={loading} error={error}>
      <ListGroup>
        {data?.myContacts.map((contact) => (
          <ListGroupItem key={contact.id} tag={Link} to={`${match.url}/${contact.id}`}>
            {`${contact.lastName}, ${contact.firstName}`}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Loading>
  );
}
