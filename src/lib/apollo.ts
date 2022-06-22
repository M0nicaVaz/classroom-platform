import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8cfby17k701xxfahh5xap/master',
  cache: new InMemoryCache(),
});
