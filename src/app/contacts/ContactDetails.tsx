import * as React from "react";

import { useContactQuery } from "../../graphql";
import { Loading } from "../components";

export interface Props {
  contactId: string;
}

export function ContactDetails(props: Props) {
  const { contactId } = props;

  const { loading, error, data } = useContactQuery(contactId);

  const contact = data?.contact;

  return (
    <Loading loading={loading} error={error} notFound={contact == undefined}>
      <div>{contact?.lastName}</div>
    </Loading>
  );
}
