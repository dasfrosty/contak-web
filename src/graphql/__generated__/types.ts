export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type CreateContactInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  note: Scalars["String"];
};

export type UpdateContactInput = {
  contactId: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  note: Scalars["String"];
};

export type UserFragment = { __typename?: "User"; id: string; username: string; email: string };

export type ContactFragment = {
  __typename?: "Contact";
  id: string;
  firstName: string;
  lastName: string;
  note?: Maybe<string>;
  created: any;
  modified: any;
};

export type UpdateContactMutationVariables = Exact<{
  contactId: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  note: Scalars["String"];
}>;

export type UpdateContactMutation = {
  __typename?: "Mutation";
  updateContact?: Maybe<{
    __typename?: "UpdateContactMutation";
    contact: { __typename?: "Contact" } & ContactFragment;
  }>;
};

export type MyContactsQueryVariables = Exact<{ [key: string]: never }>;

export type MyContactsQuery = {
  __typename?: "Query";
  myContacts: Array<{ __typename?: "Contact" } & ContactFragment>;
};

export type ContactQueryVariables = Exact<{
  contactId: Scalars["ID"];
}>;

export type ContactQuery = {
  __typename?: "Query";
  contact?: Maybe<{ __typename?: "Contact" } & ContactFragment>;
};
