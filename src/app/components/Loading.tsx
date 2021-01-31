import * as React from "react";
import { ApolloError } from "@apollo/client";

interface Props {
  loading: boolean;
  error?: ApolloError;
  children?: React.ReactNode;
}

export function Loading({ loading, error, children }: Props) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return <>{children}</>;
}
