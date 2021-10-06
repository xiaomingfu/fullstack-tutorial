require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  // define your mock properties here
  SpaceCat: () => ({
    id: () => "spacecat_01",
    title: () => "spacecat pioneer",
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});
