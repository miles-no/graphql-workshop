import { ApolloClient, DefaultOptions, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { TypedTypePolicies } from './generated/apollo-helpers';
import introspectionResult from './generated/introspection-result';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new RetryLink(),
  new HttpLink({ uri: 'http://localhost:5000/graphql', credentials: 'same-origin' }),
]);

const typePolicies: TypedTypePolicies = {
  WellTest: { keyFields: false },
  WeatherReport: { keyFields: false },
};

const cache = new InMemoryCache({
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies,
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  },
  query: {
    fetchPolicy: 'cache-first',
  },
};

export default new ApolloClient({
  link,
  cache,
  defaultOptions,
});
