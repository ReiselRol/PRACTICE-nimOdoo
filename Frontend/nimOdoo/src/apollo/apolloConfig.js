import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
  cache: new InMemoryCache(),
  fetchOptions: {
    timeout: 100000,
  },
});

export default client;