const pub = require('./pub');

const query = `
    type Query {
        pub(pubId: ID): Pub
    }
`;

const schemaDefinition = `
    schema {
        query: Query
    }
`;

module.exports = [schemaDefinition, query, pub];