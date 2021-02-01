import { useMutation, gql } from "@apollo/client";
import { CONTACT_FRAGMENT } from "./fragments";
import {
  TokenAuthMutation,
  TokenAuthMutationVariables,
  UpdateContactMutation,
  UpdateContactMutationVariables,
} from "./__generated__/types";

const TOKEN_AUTH_MUTATION = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      payload
      refreshExpiresIn
      token
    }
  }
`;

const UPDATE_CONTACT_DETAILS_MUTATION = gql`
  mutation updateContact($contactId: ID!, $firstName: String!, $lastName: String!, $note: String!) {
    updateContact(
      input: { contactId: $contactId, firstName: $firstName, lastName: $lastName, note: $note }
    ) {
      contact {
        ...Contact
      }
    }
  }
  ${CONTACT_FRAGMENT}
`;

export function useTokenAuthMutation() {
  const [tokenAuthMutation, tokenAuthMutationResult] = useMutation<
    TokenAuthMutation,
    TokenAuthMutationVariables
  >(TOKEN_AUTH_MUTATION);

  return { tokenAuthMutation, tokenAuthMutationResult };
}

export function useUpdateContactMutation() {
  const [updateContactMutation] = useMutation<
    UpdateContactMutation,
    UpdateContactMutationVariables
  >(UPDATE_CONTACT_DETAILS_MUTATION);

  return updateContactMutation;
}
