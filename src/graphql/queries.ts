import { useQuery, gql } from "@apollo/client";
import { USER_FRAGMENT, CONTACT_FRAGMENT } from "./fragments";
import {
  ContactQuery,
  ContactQueryVariables,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  MyContactsQuery,
  MyContactsQueryVariables,
} from "./__generated__/types";

export const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      id
      username
      email
    }
  }
`;

export const MY_CONTACTS_QUERY = gql`
  query myContacts {
    myContacts {
      ...Contact
    }
  }
  ${CONTACT_FRAGMENT}
`;

export const CONTACT_QUERY = gql`
  query contact($contactId: ID!) {
    contact(id: $contactId) {
      ...Contact
    }
  }
  ${CONTACT_FRAGMENT}
`;

export function useCurrentUserQuery() {
  return useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CURRENT_USER_QUERY);
}

export function useMyContactsQuery() {
  return useQuery<MyContactsQuery, MyContactsQueryVariables>(MY_CONTACTS_QUERY);
}

export function useContactQuery(contactId: string) {
  return useQuery<ContactQuery, ContactQueryVariables>(CONTACT_QUERY, {
    variables: { contactId },
  });
}
