const resolvers = {
    Query: {
        // returns an array of tracks to be used to populate homepage
        tracksForHome:(_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    },

};

module.exports = resolvers;