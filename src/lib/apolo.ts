import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sl51a8290p01z19kp99swi/master',
  cache: new InMemoryCache()
})