const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launch]!
    Launch(id: ID!): Launch
    # Queries for current user
    me: User
  }
`;

module.exports = typeDefs;
