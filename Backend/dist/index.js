import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './Apollo/typeDefs.js';
import resolvers from './Apollo/resolvers.js';
const server = new ApolloServer({ typeDefs, resolvers });
const startServer = async () => {
    const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });
    console.log('Server ready at ' + url + '!');
};
await startServer();
