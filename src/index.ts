import { ApolloServer } from "apollo-server";
import Class from "./resolver/ClassResolver";
import Query from "./resolver/QueryResolver";
import Student from "./resolver/StudentResolver";
import typeDefs from "./types/typeDefs";

const resolvers = {
  Query,
  Class,
  Student,
};

const server = new ApolloServer({ typeDefs, resolvers });

// prettier-ignore
server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
