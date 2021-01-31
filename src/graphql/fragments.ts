import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    username
    email
  }
`;

export const CONTACT_FRAGMENT = gql`
  fragment Contact on Contact {
    id
    firstName
    lastName
    note
    created
    modified
  }
`;
