const router = require('express').Router();
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const schema = require('../graphQL/index');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

router.use('/graphiql', graphiqlExpress({ endpointURL: '/api/graphql' }));

module.exports = router;
