const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    # Queries for current user
    me: User
  }

  type Launch {
    id: ID!
    site: string
    mission: Mission
    rocket: Rocket
    isBooked: boolean 
  }

  type Rocket {
    id: ID!
    name: string
    type: string
  }

  type User {
    id: ID!
    email: string!
    trips: [Launch]!
  }

  type Mission {
    name: string
    missionPatch(site: PatchSize): string
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Mutation {
    # if false, booking trips failed -- check errors
    bookTrips(launchIds: [ID]!): TripUpdateResponse!

    # if false, cancellation failed -- check errors
    cancelTrips(launchId: ID!): TripUpdateResponse!

    login(email: string): String # login token
  }

  type TripUpdateResponse {
    success: boolean!
    message: string
    launches: [Launch]
  }
`;

module.exports = typeDefs;
