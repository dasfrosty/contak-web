import { useMutation, gql } from "@apollo/client";
import { CONTACT_FRAGMENT } from "./fragments";
import { UpdateContactMutation, UpdateContactMutationVariables } from "./__generated__/types";

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

export function useUpdateContactMutation() {
  const [updateContactMutation] = useMutation<
    UpdateContactMutation,
    UpdateContactMutationVariables
  >(UPDATE_CONTACT_DETAILS_MUTATION);

  return updateContactMutation;
}
