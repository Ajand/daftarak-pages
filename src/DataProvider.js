import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const DataProvider = ({ children }) => {

    console.log(client)

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default DataProvider;
