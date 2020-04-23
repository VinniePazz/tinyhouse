import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

const app = express();

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: '/api' });

const port = 9000;

app.listen(port, () => {
  console.log(`[app] : http://localhost:${port}`);
});
