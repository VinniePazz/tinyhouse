import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

const port = 9000;

app.listen(port, () => {
  console.log(`[app] : http://localhost:${port}`);
});
