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

export type Query = {
  __typename?: "Query";
  contact?: Maybe<Contact>;
  allContacts: Array<Contact>;
  myContacts: Array<Contact>;
  currentUser?: Maybe<User>;
};

export type QueryContactArgs = {
  id: Scalars["ID"];
};

export type Contact = {
  __typename?: "Contact";
  id: Scalars["ID"];
  created: Scalars["DateTime"];
  modified: Scalars["DateTime"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
  user: User;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"];
  email: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  deleteTokenCookie?: Maybe<DeleteJsonWebTokenCookie>;
};

export type MutationTokenAuthArgs = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars["String"]>;
};

export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars["String"]>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  payload: Scalars["GenericScalar"];
  refreshExpiresIn: Scalars["Int"];
  token: Scalars["String"];
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"];
};

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"];
  refreshExpiresIn: Scalars["Int"];
  token: Scalars["String"];
};

export type DeleteJsonWebTokenCookie = {
  __typename?: "DeleteJSONWebTokenCookie";
  deleted: Scalars["Boolean"];
};

export type UserFragment = { __typename?: "User" } & Pick<User, "id" | "username" | "email">;

export type ContactFragment = { __typename?: "Contact" } & Pick<
  Contact,
  "id" | "firstName" | "lastName" | "note" | "created" | "modified"
>;

export type MyContactsQueryVariables = Exact<{ [key: string]: never }>;

export type MyContactsQuery = { __typename?: "Query" } & {
  myContacts: Array<{ __typename?: "Contact" } & ContactFragment>;
};
