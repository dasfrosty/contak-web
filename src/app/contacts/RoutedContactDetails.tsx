import * as React from "react";
import { useParams } from "react-router-dom";

import { ContactDetails } from "./ContactDetails";

interface RouteParams {
  contactId: string;
}

export function RoutedContactDetails() {
  let { contactId } = useParams<RouteParams>();
  return <ContactDetails contactId={contactId} />;
}
