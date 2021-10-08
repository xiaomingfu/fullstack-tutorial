const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const resolver = require("./resolvers");
const TrackAPI = require("./dataSources/track-api");

const server = new ApolloServer({
  typeDefs,
  resolver,
  dataSources: () => {
    return { trackAPI: new TrackAPI() };
  },
});

server.listen().then(() => {
  console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});
