import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApolloClient, ApolloProvider, DefaultOptions, InMemoryCache } from "@apollo/client";

import { Root } from "./Root";

// TODO: use bootstrap.min.css
import "bootstrap/dist/css/bootstrap.css";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "none",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "none",
  },
};

const client = new ApolloClient({
  uri: "/contak/graphql",
  cache: new InMemoryCache(),
  defaultOptions,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("app-root"),
);
