import * as React from "react";
import { ApolloError } from "@apollo/client";

interface Props {
  loading: boolean;
  error?: ApolloError;
  notFound?: boolean;
  children?: React.ReactNode;
}

export function Loading(props: Props) {
  const { loading, error, notFound, children } = props;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  if (notFound) {
    return <p>Not found!</p>;
  }

  return <>{children}</>;
}
