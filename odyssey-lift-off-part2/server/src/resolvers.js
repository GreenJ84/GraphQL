const resolvers = {
    Query: {
        // returns an Array of Tracks that will be used to populate the homepage grid of our website
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksFromHOme
        }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)
        }
    }
};

module.exports = resolvers;