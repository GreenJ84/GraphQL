const { gql } = require('apollo-server');

const typeDefs = gql`
"Query to get tracks array for homepage grid"
type Query{
    tracksForHome: [Track!]!
}

"A group of modules teaching a topic"
type Track{
    id: ID!
    "Track Title"
    title: String!
    "Track Author"
    author: Author!
    "Track thumbnail URL"
    thumbnail: String
    "Track time-length"
    length: Int
    "Track Module Cuunt"
    modulesCount: Int
}

"An Author for Tracks"
type Author{
    id: ID!
    "Author Name"
    name: String!
    "Author Photo URL"
    photo: String!
}
`;

module.exports = typeDefs;