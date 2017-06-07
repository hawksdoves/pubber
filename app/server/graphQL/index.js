const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./typeDefinitions/index');
const resolvers = require('./resolvers/index');

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;